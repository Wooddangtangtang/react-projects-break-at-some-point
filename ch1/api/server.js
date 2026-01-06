import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// ---- in-memory store (프로세스 재시작 시 초기화) ----
let seq = 1;
let items = []; // [{ id: number, value: number }]

// root: 배포 후 브라우저로 / 접근했을 때 정상 확인용
app.get("/", (_req, res) => {
  res.status(200).send("OK");
});

// list
app.get("/api/items", (_req, res) => {
  res.json(items);
});

// create: value=0
app.post("/api/items", (_req, res) => {
  const created = { id: seq++, value: 0 };
  items = [created, ...items];
  res.status(201).json(created);
});

// update: +1
app.patch("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = items.findIndex((it) => it.id === id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });

  const updated = { ...items[idx], value: items[idx].value + 1 };
  items = items.map((it) => (it.id === id ? updated : it));
  res.json(updated);
});

// remove
app.delete("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = items.some((it) => it.id === id);
  if (!exists) return res.status(404).json({ message: "Not found" });

  items = items.filter((it) => it.id !== id);
  res.status(204).end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

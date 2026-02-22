export default function App() {
  return (
    <div className="page">
      <div className="page-header">
        <Logo />
      </div>
      <div className="page-content">
        <PostList />
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </div>
  );
}

function Logo() {
  return <div>Logo</div>;
}

function PostList() {
  return (
    <div>
      <div>PostList</div>
      <ul>
        <li>Post1</li>
        <li>Post2</li>
        <li>Post3</li>
        <li>Post3</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <hr />
      <div>Footer</div>
    </div>
  );
}



function Body(props) {
  return (
  <div>

    <h1 id="welcome" className="title">
      Play apps!
    </h1>


  </div>
);
}

function Li (props) {
return <li><a href={props.href}>{props.text}</a></li>
}


function App() {
return (
  <div>
    <NavbarSolidLogin
       className="is-link" 
       title="Play Apps" 
       sourceCode="https://github.com/play-grounds/react/blob/gh-pages/play/index.html"/>
    <section className="section">
      <Body/>
      <hr/>
      Play apps is a set of playground apps to test out various functionality.
      <br/>
      Click on a link below to try out one of our apps.
      <hr/>
    <ul>
      <Li href="bookmark.html" text="Bookmarks" />
      <Li href="brain.html" text="Brain Wallet" />
      <Li href="friends.html" text="Friends in RDF" />
      <Li href="solid.html" text="Solid App" />
      <Li href="rdflib.html" text="Test RDFLib" />
      <Li href="tipjar.html" text="Tipjars" />
      <Li href="localStorage.html" text="Local Storage" />
      <Li href="bookmarklet.html" text="Bookmarklets" />
      <Li href="solid-auth-client.html" text="Solid Auth Client" />
      <Li href="wallet.html" text="Wallet" />
      <Li href="credit.html" text="Credit" />
      <Li href="outstated.html" text="Outstated Counter" />
      <Li href="counter.html" text="Counter App" />
      <Li href="seed.html" text="Seed App" />
      <Li href="inbox.html" text="Inbox App" />
      <Li href="patch.html" text="Patch App" />
      <Li href="put.html" text="Put App" />
      <Li href="person.html" text="Profile App" />
      <Li href="container.html" text="Container App" />
      <Li href="timeline.html" text="Timeline App" />
      <Li href="dashboard.html" text="Dashboard App" />
      <Li href="acl.html" text="ACL App" />
    </ul>
    <hr/>
    </section>

  </div>
);
}

ReactDOM.render(
<App />,
document.getElementById('root')
);


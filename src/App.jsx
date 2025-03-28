import ProfileCard from "./ProfileCard"

function App() {

  return (
    <>
    <h1>Componente app</h1>
    <section className="hero is-dark">
    <div className="hero-body">
      <p className="title">Personal Digital Assistance</p>
    </div>
    </section>

    <div className="conteirner">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
            title="alexa"
            handle="@alexa24"
            image="https://upload.wikimedia.org/wikipedia/commons/c/cc/Amazon_Alexa_App_Logo.png"

            />
          </div>
          <div className="column is-4">
            <ProfileCard
            title="attack on titans"
            handle="@eren"
            image="https://es.web.img2.acsta.net/c_300_300/img/0a/4e/0a4e1521ddaa4e1589728084121b9eeb.png"

            />
          </div>
          <div className="column is-4">
            <ProfileCard/>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default App

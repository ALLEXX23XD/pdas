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
            title="cortana"
            handle=""
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1L5YJ7uul7AkVDU7CFa-aQx_Qa-b0aMXvba2phE5FGjPU6KLZVTC9eiHWnxGq_ni1CCg&usqp=CAU"

            />
          </div>
          <div className="column is-4">
            <ProfileCard
            title="siri"
            handle=""
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlf76syoG0LJRhxbgjUrsBY6f-6fS-RAuXw&s"
/>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default App

import CoreConcepts from "./CoreConcepts";
import Header from "./Header";
import reactConceptsImg from "./assets/components.png";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts
              img={reactConceptsImg}
              title="Time to get started"
              desc="Time to get started"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

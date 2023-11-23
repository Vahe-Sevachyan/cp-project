import CoreConcepts from "./CoreConcepts";
import Header from "./Header";

import { CORE_CONCEPTS } from "./Data";
import TabButton from "./TabButton";
function App() {
  function handleSelect() {
    console.log("clicked button - selected");
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concepts) => {
              const { image, title, description } = concepts;
              return (
                <CoreConcepts
                  img={image}
                  title={title}
                  description={description}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

import CoreConcepts from "./CoreConcepts";
import Header from "./Header";

import { CORE_CONCEPTS } from "./Data";
function App() {
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
      </main>
    </div>
  );
}

export default App;

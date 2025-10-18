export default function Cap12() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans leading-relaxed p-5">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-[#2c3e50] border-b-2 border-[#3498db] pb-3">
          Capítulo 12: La Nueva Filosofía de la Ciencia - Thomas Kuhn
        </h1>

        <h2 className="text-2xl font-semibold text-[#3498db] border-b border-gray-200 pb-2 mt-8">
          La Nueva Filosofía de la Ciencia: Un Giro Historicista
        </h2>
        <p className="mt-4 text-justify">
          El capítulo presenta la <span className="italic">&quot;nueva filosofía de la ciencia&quot;</span>, una corriente epistemológica que surge como una crítica
          a la &quot;filosofía clásica de la ciencia&quot; (positivismo lógico y falsacionismo). Su principal exponente es Thomas Kuhn, quien con su libro{" "}
          <em>La estructura de las revoluciones científicas</em> inaugura una nueva forma de comprender el desarrollo científico.
        </p>
        <p className="mt-3 text-justify">
          La crítica fundamental de Kuhn a la perspectiva clásica es su omisión de la{" "}
          <strong className="text-[#c0392b]">historia de la ciencia</strong>. Sostiene que la ciencia no puede ser entendida solo a través de la
          reconstrucción lógica, sino que es esencial analizarla en su contexto social e histórico. Kuhn argumenta que en la práctica científica intervienen
          factores &quot;extra-científicos&quot; (sociales, ideológicos, psicológicos, etc.) que son determinantes en la elección de teorías.
        </p>

        <h2 className="text-2xl font-semibold text-[#3498db] border-b border-gray-200 pb-2 mt-10">
          Críticas a la Filosofía Clásica
        </h2>
        <p className="mt-4 text-justify">Kuhn cuestiona varios pilares de la visión clásica:</p>
        <ul className="list-square pl-6 space-y-3">
          <li>
            <strong className="text-[#c0392b]">Observación Neutral:</strong> Rechaza la idea de una base empírica neutral. Sostiene que toda observación está
            influenciada por los conocimientos, experiencias y expectativas del observador. Por lo tanto, no existe una percepción del mundo que no esté
            determinada por un marco teórico previo, lo que invalida la distinción tajante entre términos teóricos y observacionales.
          </li>
          <li>
            <strong className="text-[#c0392b]">Contexto de Descubrimiento vs. Justificación:</strong> La crítica a la observación neutral lleva a Kuhn a
            cuestionar también la estricta división entre el contexto de descubrimiento y el de justificación.
          </li>
          <li>
            <strong className="text-[#c0392b]">Progreso Acumulativo:</strong> Kuhn rompe con la idea de que la ciencia progresa de forma continua y
            acumulativa, donde las nuevas teorías mejoran a las anteriores. Propone, en cambio, un desarrollo discontinuo y no acumulativo.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#3498db] border-b border-gray-200 pb-2 mt-10">
          Las Etapas del Desarrollo Científico según Kuhn
        </h2>
        <p className="mt-4 text-justify">
          Kuhn identifica una serie de etapas que se repiten en el desarrollo de una disciplina científica:
        </p>

        <h3 className="text-xl font-semibold text-[#2980b9] mt-6">Período Pre-científico</h3>
        <p className="mt-2 text-justify">
          Es la etapa inicial, caracterizada por la existencia de diversas escuelas que compiten entre sí para explicar un campo de investigación. No hay un
          consenso ni un marco metodológico unificado. Este período finaliza cuando una de las escuelas logra un consenso general y se establece un paradigma.
        </p>

        <h3 className="text-xl font-semibold text-[#2980b9] mt-6">Ciencia Normal y el Concepto de Paradigma</h3>
        <p className="mt-2 text-justify">
          Con la aceptación de un <strong className="text-[#c0392b]">paradigma</strong>, la disciplina alcanza su madurez y comienza el período de{" "}
          <strong className="text-[#c0392b]">ciencia normal</strong>. Un paradigma es un logro científico que proporciona modelos de problemas y soluciones a
          una comunidad científica durante un tiempo determinado.
        </p>
        <p className="mt-2 text-justify">Kuhn lo describe en dos sentidos principales:</p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-[#c0392b]">Matriz Disciplinar:</strong> Es el sentido más amplio y se refiere al conjunto de compromisos que comparte una
            comunidad científica, funcionando como una &quot;forma de ver el mundo&quot;. Incluye principios metafísicos, generalizaciones simbólicas, valores y
            modelos.
          </li>
          <li>
            <strong className="text-[#c0392b]">Ejemplar:</strong> Es el sentido más específico y se refiere a esas soluciones concretas a problemas que la
            comunidad científica utiliza como modelos a seguir.
          </li>
        </ol>

        <p className="mt-3 text-justify">
          Durante la ciencia normal, la actividad principal es la{" "}
          <strong className="text-[#c0392b]">resolución de enigmas</strong>, que son problemas que se sabe que tienen una solución posible dentro de los
          límites del paradigma. El fracaso en resolver un enigma se atribuye al científico, no al paradigma. En esta fase, la ciencia es{" "}
          <strong className="text-[#c0392b]">acumulativa</strong>.
        </p>

        <h3 className="text-xl font-semibold text-[#2980b9] mt-6">Anomalías y Crisis</h3>
        <p className="mt-2 text-justify">
          Eventualmente, surgen <strong className="text-[#c0392b]">anomalías</strong>: problemas que se resisten a ser solucionados con las herramientas del
          paradigma. Cuando estas anomalías se multiplican y persisten, la confianza en el paradigma se debilita, generando un período de{" "}
          <strong className="text-[#c0392b]">crisis</strong>. Durante la crisis, la comunidad científica se atomiza y comienza a explorar vías alternativas de
          investigación por fuera del paradigma dominante.
        </p>

        <h3 className="text-xl font-semibold text-[#2980b9] mt-6">Revolución Científica</h3>
        <p className="mt-2 text-justify">
          Si la crisis se agudiza y no se encuentra una solución dentro del paradigma vigente, puede producirse una{" "}
          <strong className="text-[#c0392b]">revolución científica</strong>. Esta consiste en el abandono del antiguo paradigma y su reemplazo por uno nuevo e
          incompatible. Este cambio es un episodio de desarrollo{" "}
          <strong className="text-[#c0392b]">no acumulativo</strong>, que representa una ruptura radical en la forma de ver el mundo.
        </p>

        <h2 className="text-2xl font-semibold text-[#3498db] border-b border-gray-200 pb-2 mt-10">
          Inconmensurabilidad entre Paradigmas
        </h2>
        <p className="mt-4 text-justify">
          El concepto de <strong className="text-[#c0392b]">inconmensurabilidad</strong> es clave para entender la visión de Kuhn sobre el cambio científico.
          Significa que no existe una &quot;medida común&quot; o un criterio neutral para comparar dos paradigmas diferentes. Dado que cada paradigma define su propio
          mundo, sus problemas, su lenguaje y sus métodos, es imposible determinar objetivamente cuál es &quot;mejor&quot;.
        </p>
        <p className="mt-3 text-justify">La inconmensurabilidad se manifiesta en tres aspectos:</p>

        <ul className="list-square pl-6 space-y-2">
          <li>
            <strong className="text-[#c0392b]">Perceptual:</strong> Quienes adhieren a paradigmas diferentes &quot;ven&quot; el mundo de manera distinta, aunque observen
            los mismos fenómenos. El cambio de paradigma es como un &quot;switch gestáltico&quot;.
          </li>
          <li>
            <strong className="text-[#c0392b]">Metodológico-Instrumental:</strong> Cada paradigma dicta su propia metodología y el instrumental necesario para
            abordar la realidad.
          </li>
          <li>
            <strong className="text-[#c0392b]">Lingüística:</strong> Un mismo término puede tener significados diferentes en paradigmas distintos (ej. el
            término &quot;planeta&quot; para Ptolomeo y para Copérnico).
          </li>
        </ul>

        <p className="mt-3 text-justify">
          Debido a la inconmensurabilidad, Kuhn concluye que el conocimiento científico es siempre{" "}
          <strong className="text-[#c0392b]">relativo al paradigma</strong> desde el cual se concibe.
        </p>

        <h2 className="text-2xl font-semibold text-[#3498db] border-b border-gray-200 pb-2 mt-10">
          Legado de la Nueva Filosofía de la Ciencia
        </h2>
        <p className="mt-4 text-justify mb-10">
          El principal legado de la epistemología de Kuhn fue el reconocimiento de que la razón científica está{" "}
          <strong className="text-[#c0392b]">históricamente determinada</strong>. Al visibilizar el papel de los factores extra-científicos, se abrió el
          camino para nuevas corrientes, como la filosofía feminista de la ciencia, que profundizan en el análisis de cómo estos factores (por ejemplo, los
          sesgos de género) impactan en la práctica científica.
        </p>
      </div>
    </div>
  );
}

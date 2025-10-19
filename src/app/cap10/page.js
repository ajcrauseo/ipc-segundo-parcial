export default function Cap10Page() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans leading-relaxed p-5">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-[#2c3e50] border-b-2 border-[#3498db] pb-3 mt-6">
          Tercera Parte: Cuestiones epistemológicas
        </h1>

        <h2 className="text-2xl font-semibold text-[#3498db] border-b border-gray-300 pb-2 mt-8 mb-4">
          Presentación
        </h2>
        <p className="mb-4">
          La presentación de la tercera parte del libro, titulada &quot;Cuestiones epistemológicas&quot;, explica que el objetivo es abordar los problemas filosóficos relacionados con la naturaleza y el alcance del conocimiento científico. Se señala que la filosofía de la ciencia se estableció como una disciplina autónoma en la primera mitad del siglo XX, impulsada por el Círculo de Viena y la corriente del positivismo lógico.
        </p>
        <p className="mb-4">
          La tarea principal de esta nueva disciplina fue la <strong>reconstrucción lógica de la ciencia</strong>. Esto implicaba analizar la estructura de las teorías científicas, las relaciones lógicas entre sus enunciados y su vínculo con la experiencia, utilizando la lógica formal como herramienta principal. Un objetivo central de esta corriente era rechazar la metafísica, para lo cual buscaron establecer un <strong>criterio de demarcación</strong> que permitiera distinguir claramente entre la ciencia y la pseudociencia.
        </p>
        <p className="mb-4">
          Esta tercera parte del libro se estructura de la siguiente manera:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Capítulo 10</strong>: Se enfoca en cómo la <strong>filosofía clásica de la ciencia</strong> entiende la estructura de las teorías y el proceso de contrastación empírica o puesta a prueba de las mismas.
          </li>
          <li>
            <strong>Capítulo 11</strong>: Presenta las respuestas a los problemas centrales de la filosofía clásica desde dos de sus corrientes más representativas: el <strong>positivismo lógico</strong> y el <strong>falsacionismo</strong> de Karl Popper.
          </li>
          <li>
            <strong>Capítulo 12</strong>: Introduce una visión crítica del enfoque clásico a través de la propuesta de <strong>Thomas Kuhn</strong>, quien argumenta que la perspectiva anterior desatiende la historia de la ciencia y que es necesario comprenderla en su contexto social e histórico.
          </li>
          <li>
            <strong>Capítulo 13</strong>: Aborda la <strong>filosofía feminista de la ciencia</strong>, que profundiza el análisis sobre el impacto de factores extracientíficos, en particular los sesgos de género, en la investigación, las teorías resultantes y las propias reflexiones epistemológicas.
          </li>
        </ul>

        <hr className="border-0 h-px bg-gray-300 my-8" />

        <h2 className="text-2xl font-semibold text-[#3498db] border-b border-gray-300 pb-2 mt-8 mb-4">
          Resumen del Capítulo 10: La estructura de las teorías científicas y la contrastación de hipótesis (págs. 241-269)
        </h2>
        <p className="mb-4">
          Este capítulo, central en la filosofía clásica de la ciencia, se divide en dos grandes partes. La primera analiza la <strong>estructura de las teorías científicas</strong> y la segunda, el <strong>proceso de contrastación o puesta a prueba de las hipótesis</strong>.
        </p>

        <h3 className="text-xl font-semibold text-[#3498db] mt-6 mb-3">
          La estructura de las teorías científicas
        </h3>
        <p className="mb-4">
          La filosofía clásica de la ciencia, especialmente el positivismo lógico, concibe las teorías científicas como <strong>sistemas axiomáticos interpretados</strong>. Esto significa que las teorías son conjuntos de hipótesis organizadas deductivamente, donde algunas funcionan como axiomas (hipótesis fundamentales) y otras como teoremas (hipótesis derivadas). Para que estos sistemas formales puedan hablar del mundo empírico, sus términos deben ser interpretados.
        </p>
        <p className="mb-4">
          Para analizar esta estructura, se establecen distinciones clave en el vocabulario y en los enunciados de una teoría:
        </p>

        <h4 className="text-lg font-semibold text-[#3498db] mt-4 mb-2">
          Tipos de Términos
        </h4>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Términos observacionales:</strong> Se refieren a objetos, propiedades o relaciones que son accesibles de forma directa a través de la experiencia y los sentidos. Ejemplos son &quot;mono&quot;, &quot;balanza&quot; o &quot;planeta&quot;.
          </li>
          <li>
            <strong>Términos teóricos:</strong> Se refieren a entidades a las que solo se accede de modo indirecto, mediante instrumentos o teorías. Ejemplos son &quot;gen&quot;, &quot;electrón&quot; o &quot;inconsciente&quot;. El capítulo aclara que esta distinción no es tajante, sino más bien gradual.
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-[#3498db] mt-4 mb-2">
          Tipos de Enunciados
        </h4>
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-2">
            <strong>Enunciados empíricos básicos:</strong> Son afirmaciones singulares o muestrales que solo contienen términos observacionales. Su verdad o falsedad se puede determinar de forma directa y efectiva mediante la observación. Sirven como la base para la contrastación de hipótesis.
          </li>
          <li className="mb-2">
            <strong>Generalizaciones empíricas:</strong> Son enunciados que, aunque solo contienen términos observacionales, se refieren a clases infinitas o potencialmente infinitas de casos. Pueden ser universales (ej. &quot;Todos los metales se dilatan con el calor&quot;), estadísticas o existenciales. Debido a su alcance, no pueden ser evaluadas directamente.
          </li>
          <li>
            <strong>Enunciados teóricos:</strong> Son aquellos que contienen al menos un término teórico. Pueden ser:
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Puros:</strong> Solo contienen términos teóricos (ej. &quot;Los átomos están compuestos de electrones&quot;).
              </li>
              <li>
                <strong>Mixtos:</strong> Contienen tanto términos teóricos como observacionales. Son cruciales porque actúan como &quot;reglas de correspondencia&quot;, vinculando el nivel teórico con el observacional, permitiendo así la contrastación empírica de la teoría.
              </li>
            </ul>
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-[#3498db] mt-6 mb-3">
          El proceso de contrastación de hipótesis
        </h3>
        <p className="mb-4">
          La contrastación empírica es el proceso mediante el cual las hipótesis son sometidas a prueba. El capítulo lo ilustra con las investigaciones de la neurocientífica Suzana Herculano-Houzel sobre la relación entre el cerebro y las habilidades cognitivas.
        </p>

        <h4 className="text-lg font-semibold text-[#3498db] mt-4 mb-2">
          La Lógica de la Contrastación
        </h4>
        <p className="mb-4">
          El proceso de puesta a prueba implica deducir, a partir de una <strong>hipótesis fundamental (HF)</strong>, una <strong>consecuencia observacional (CO)</strong>, que es un enunciado empírico básico que describe lo que se esperaría observar si la hipótesis fuera correcta.
        </p>
        <p className="mb-4">Existen dos resultados posibles, que revelan una asimetría fundamental:</p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            <strong>Refutación:</strong> Si la consecuencia observacional resulta ser falsa (<strong>No es cierto que CO</strong>), se puede refutar la hipótesis. El razonamiento sigue la forma válida del <strong>Modus Tollens</strong>:<br />
            Si HF entonces CO<br />
            No es cierto que CO<br />
            Por lo tanto, no es cierto que HF<br />
            Esto permite concluir lógicamente que la hipótesis es falsa.
          </li>
          <li>
            <strong>Confirmación:</strong> Si la consecuencia observacional resulta ser verdadera (<strong>CO</strong>), no se puede afirmar lógicamente que la hipótesis es verdadera. El razonamiento sigue la forma inválida de la <strong>Falacia de Afirmación del Consecuente</strong>:<br />
            Si HF entonces CO<br />
            CO<br />
            Por lo tanto, HF<br />
            Esto se conoce como la <strong>asimetría de la contrastación</strong>: desde un punto de vista lógico, es posible refutar una hipótesis, pero es imposible verificarla. Esto implica que el conocimiento científico es siempre provisorio.
          </li>
        </ol>

        <h4 className="text-lg font-semibold text-[#3498db] mt-4 mb-2">
          El Proceso Complejo de Contrastación
        </h4>
        <p className="mb-4">
          La contrastación real es más compleja, ya que la deducción de la CO no depende solo de la HF, sino también de:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Hipótesis Auxiliares (HA):</strong> Enunciados generales que se dan por sentados y que son cruciales para la contrastación. Por ejemplo, la fiabilidad de los instrumentos o métodos utilizados.
          </li>
          <li>
            <strong>Condiciones Iniciales (CI):</strong> Enunciados empíricos básicos que describen las circunstancias particulares del experimento.
          </li>
        </ul>
        <p className="mb-4">
          Cuando el resultado es desfavorable (la CO es falsa), lo que se refuta no es la hipótesis fundamental aislada, sino la conjunción de <strong>(HF, CI y HA)</strong>. Esto permite a los científicos salvar una hipótesis fundamental cuestionando las hipótesis auxiliares o las condiciones iniciales. Con este fin, a veces se introducen <strong>hipótesis ad hoc</strong>, que son formuladas con el único propósito de proteger a la hipótesis fundamental de la refutación.
        </p>
      </div>
    </div>
  );
}

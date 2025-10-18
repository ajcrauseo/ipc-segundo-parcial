export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans leading-relaxed p-4">
      <div className="max-w-3xl mx-auto my-6 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-[#2c3e50] border-b-2 border-[#3498db] pb-2">
          Cuarta Parte: {<br></br>}Dimensión Ético-Política de la Ciencia
        </h1>

        <h2 className="text-2xl text-[#3498db] mt-8 border-b border-gray-300 pb-1">
          Presentación 
        </h2>
        <p className="mb-4">
          Esta parte cambia el enfoque de las <strong className="font-bold text-gray-600">cuestiones epistemológicas</strong> (abordadas en la Parte 3) a las <strong className="font-bold text-gray-600">dimensiones éticas y políticas</strong> inherentes a la ciencia. Reconoce que la ciencia no es solo un conjunto de teorías, sino una <strong className="font-bold text-gray-600">práctica social</strong> realizada dentro de comunidades y que impacta en la sociedad en general. Si bien la ciencia y la tecnología aportan beneficios (curas, avances en comunicación), también tienen posibles desventajas (uso en guerras, daño ambiental). Este potencial dual plantea <strong className="font-bold text-gray-600">cuestiones éticas cruciales sobre la responsabilidad</strong> que tienen los científicos por las aplicaciones derivadas de sus investigaciones. La introducción contrasta el &quot;cientificismo&quot; (que puede minimizar la responsabilidad) y el &quot;anticientificismo&quot; (que la resalta). También señala que la ciencia está <strong className="font-bold text-gray-600">institucionalizada</strong> e influenciada por la sociedad, especialmente a través de la <strong className="font-bold text-gray-600">financiación</strong>, lo que introduce dimensiones políticas en juego. Esta sección prepara el terreno para discutir la ética (Capítulo 14) y las políticas científicas (Capítulo 15).
        </p>

        <hr className="my-8" />

        <h2 className="text-3xl text-[#2c3e50] mt-8 border-b border-gray-300 pb-1 font-bold">
          Capítulo 14: La dimensión ética de la ciencia
        </h2>
        <p className="mb-4">
          Este capítulo profundiza en las cuestiones éticas que rodean la práctica científica.
        </p>

        <h3 className="text-xl text-[#2980b9] mt-5">La distinción entre hechos y valores</h3>
        <ul className="ml-5 mb-4 list-disc">
          <li className="mb-2"><strong className="font-bold text-gray-600">Hechos</strong>: Se refieren a estados de cosas, situaciones o cómo <em>son</em> las cosas. Se describen mediante <strong className="font-bold text-gray-600">afirmaciones descriptivas</strong> (ej., &quot;La Tierra gira alrededor del Sol&quot;).</li>
          <li className="mb-2"><strong className="font-bold text-gray-600">Valores</strong>: Conciernen a lo que es bueno, malo, correcto, incorrecto o cómo <em>deberían ser</em> las cosas. Se expresan a través de <strong className="font-bold text-gray-600">afirmaciones valorativas (normativas o evaluativas)</strong> (ej., &quot;La crueldad hacia los animales es repudiable&quot;).</li>
          <li className="mb-2">La verdad de los juicios de hecho puede determinarse empíricamente, pero la de los juicios de valor no. Sin embargo, la <strong className="font-bold text-gray-600">discusión racional</strong> sobre valores es posible y necesaria.</li>
          <li className="mb-2">La <strong className="font-bold text-gray-600">&quot;falacia naturalista&quot;</strong> es el error de intentar derivar juicios de valor directamente de juicios de hecho (derivar un &quot;debe ser&quot; de un &quot;es&quot;) sin una premisa valorativa oculta.</li>
          <li className="mb-2">Aunque algunos enfoques (como epistemologías feministas) señalan que los hechos pueden estar <strong className="font-bold text-gray-600">cargados de valores</strong> (ej., el cálculo del PBI implica juicios sobre qué actividades son valiosas) , la distinción sigue siendo útil analíticamente para descubrir valores implícitos.</li>
          <li className="mb-2">La <strong className="font-bold text-gray-600">ética</strong>, como disciplina filosófica, reflexiona sobre estas cuestiones valorativas.</li>
        </ul>

        <h3 className="text-xl text-[#2980b9] mt-5">La integridad científica</h3>
        <p className="mb-4">
          Se refiere a los valores inherentes a la práctica científica, exigiendo <strong className="font-bold text-gray-600">altos estándares de honestidad y rigor profesional</strong>.
        </p>
        <ul className="ml-5 mb-4 list-disc">
          <li className="mb-2">La <strong className="font-bold text-gray-600">revisión por pares (peer review)</strong> es un mecanismo institucional clave para intentar asegurar estos estándares. Los trabajos son evaluados por especialistas antes de su publicación. No es infalible, como muestra el caso de Dan Ariely y sus datos manipulados sobre la deshonestidad.</li>
          <li className="mb-2"><strong className="font-bold text-gray-600">Problemas éticos del sistema de revisión por pares</strong>:
            <ul className="ml-5 list-disc">
              <li className="mb-2"><strong className="font-bold text-gray-600">&quot;Incentivos perversos&quot;</strong>: La presión por publicar (cantidad sobre calidad) puede llevar a comportamientos poco éticos, como apresurar resultados, no compartir datos o incluso fraude (ej., la disputa Gallo/Montagnier sobre el descubrimiento del VIH).</li>
              <li className="mb-2"><strong className="font-bold text-gray-600">Acceso a la información</strong>: Las revistas tradicionales suelen cobrar por el acceso, limitando la difusión del conocimiento. El movimiento de acceso abierto y los <em>preprints</em> permiten una difusión más rápida y una evaluación descentralizada, aunque desafían el modelo editorial tradicional. También se debate sobre la propiedad intelectual y el lucro de las editoriales.</li>
            </ul>
          </li>
          <li className="mb-2"><strong className="font-bold text-gray-600">Conflictos de interés</strong>: La financiación, especialmente la privada (empresas), puede influir en las agendas de investigación o en la interpretación/publicación de resultados, comprometiendo la integridad. Ejemplos incluyen investigaciones financiadas por farmacéuticas (Purdue/OxyContin), tabacaleras o empresas tecnológicas (Google/despido de T. Gebru).</li>
        </ul>

        <h3 className="text-xl text-[#2980b9] mt-5">La ética de la investigación científica</h3>
        <p className="mb-4">
          Se enfoca en el daño potencial causado <em>durante</em> el proceso de investigación.
        </p>
        <ul className="ml-5 mb-4 list-disc">
          <li className="mb-2"><strong className="font-bold text-gray-600">Investigación biomédica</strong>: El <strong className="font-bold text-gray-600">estudio de Tuskegee sobre la sífilis</strong> es un ejemplo histórico extremo de falta de ética (engaño a participantes, negación de tratamiento). Esto llevó a la creación de comités de ética y protocolos estrictos para proteger a los voluntarios humanos hoy. Dilemas contemporáneos incluyen los ensayos de desafío humano (exponer voluntarios a enfermedades a cambio de dinero).</li>
          <li className="mb-2"><strong className="font-bold text-gray-600">Otras áreas</strong>: Problemas similares surgen en ciencias sociales. El <strong className="font-bold text-gray-600">experimento de Milgram</strong> sobre la obediencia implicó engaño y potencial daño psicológico a los participantes. El uso de <strong className="font-bold text-gray-600">big data de internet</strong> para investigación plantea serios problemas éticos sobre la privacidad y el consentimiento informado.</li>
        </ul>

        <h3 className="text-xl text-[#2980b9] mt-5">La ética de los usos de la ciencia y el problema de la responsabilidad científica</h3>
        <p className="mb-4">
          Aborda la responsabilidad de los científicos cuando los resultados de sus investigaciones se usan para fines éticamente cuestionables.
        </p>
        <ul className="ml-5 mb-4 list-disc">
          <li className="mb-2">El <strong className="font-bold text-gray-600">Proyecto Manhattan</strong> y la bomba atómica, con las preocupaciones morales posteriores de Oppenheimer, ilustran este dilema.</li>
          <li className="mb-2"><strong className="font-bold text-gray-600">&quot;Cientificismo&quot; (según Bunge)</strong>: Distingue entre ciencia pura/aplicada (neutral) y tecnología (donde entran los valores). La ciencia sería una herramienta neutral (&quot;ciencia martillo&quot;). Wernher von Braun es un ejemplo de esta postura.</li>
          <li className="mb-2"><strong className="font-bold text-gray-600">&quot;Anticientificismo&quot; (según Varsavsky, Marí)</strong>: Sostiene que ciencia y tecnología (tecnociencia) son inseparables y están cargadas de valores. Critica la idea de neutralidad, vinculando la racionalidad científica moderna con intereses de dominación (Adorno/Horkheimer).</li>
          <li className="mb-2"><strong className="font-bold text-gray-600">Postura intermedia (Kitcher)</strong>: Rechaza la idea de &quot;ciencia pura&quot; totalmente desinteresada, ya que la relevancia de los temas de investigación siempre está ligada a intereses humanos. Admite que la práctica científica tiene cierta autonomía, pero está entrelazada con intereses prácticos. Permite pensar en distintos <em>grados</em> de responsabilidad según el rol.</li>
        </ul>

        <h3 className="text-xl text-[#2980b9] mt-5">La relación entre ciencia y democracia</h3>
        <ul className="ml-5 mb-4 list-disc">
          <li className="mb-2">La investigación científica puede entrar en tensión con valores democráticos como la igualdad.</li>
          <li className="mb-2">La controversia sobre la <strong className="font-bold text-gray-600">Sociobiología de E.O. Wilson</strong> es un ejemplo: el intento de explicar comportamientos sociales humanos (incluyendo desigualdades) desde la biología evolutiva fue criticado por potencialmente &quot;naturalizar&quot; y justificar desigualdades sociales.</li>
          <li className="mb-2">El debate enfrenta la libertad de investigación con el riesgo de daño social.</li>
          <li className="mb-2"><strong className="font-bold text-gray-600">Asimetrías de Kitcher</strong> en investigaciones socialmente sensibles:
            <ul className="ml-5 list-disc">
              <li className="mb-2"><strong className="font-bold text-gray-600">Asimetría epistémica</strong>: Los prejuicios preexistentes pueden sesgar la evaluación de la evidencia. El rechazo de una hipótesis que desafía prejuicios puede no llevar a cambiar de opinión.</li>
              <li className="mb-2"><strong className="font-bold text-gray-600">Asimetría política</strong>: Los resultados de la investigación afectan de manera desigual a distintos grupos sociales, pudiendo reforzar prejuicios contra los más vulnerables.</li>
            </ul>
          </li>
          <li className="mb-2">Conclusión: Las decisiones sobre ética científica no son exclusivas de expertos. Conciernen a toda la sociedad democrática y deben ser abordadas mediante deliberación pública en una &quot;comunidad ampliada de evaluadores&quot;.</li>
        </ul>
      </div>
    </div>
  );
}

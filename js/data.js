const quizInfo = {
  pageTitle: "U2 - Servicios de Internet (II)",
  title: "Quiz - El destino fisico de los datos",
  subtitle: "Internet II",
  classInfo: "4° Año - Materia: Computer Science",
  welcomeTitle: "U2 - Servicios de Internet (II)",
  welcomeDescription:
    "¿Alguna vez perdiste un archivo porque se rompió tu computadora o un pendrive?Hoy, guardar información en dispositivos físicos ya no es la única opción. Aprenderemos cómo la nube y las direcciones web conectan nuestra información con el mundo.",
};

const quizData = [
  // PARTE A: OPCIÓN MÚLTIPLE
  {
    question: "¿Cuál es el significado del acrónimo URL?",
    hint: "Pista útil para responder: Opción correcta B. Se refiere a la dirección estandarizada de un recurso.",
    options: [
      {
        text: "Universal Resource Link",
        isCorrect: false,
        rationale:
          "Incorrecto. 'Link' y 'Universal' no forman parte del acrónimo técnico oficial.",
      },
      {
        text: "Uniform Resource Locator",
        isCorrect: true,
        rationale:
          "¡Correcto! Es el localizador uniforme de recursos que permite encontrar páginas en la web.",
      },
      {
        text: "Unified Remote Location",
        isCorrect: false,
        rationale:
          "Incorrecto. Aunque suena técnico, no describe el protocolo de direccionamiento de internet.",
      },
      {
        text: "User Resource Locator",
        isCorrect: false,
        rationale:
          "Incorrecto. Las URL no están ligadas o nombradas en función del usuario final.",
      },
    ],
  },
  {
    question: "¿Qué es el cloud storage?",
    hint: "Pista útil para responder: Opción correcta B. Involucra servidores ajenos conectados a la red.",
    options: [
      {
        text: "Datos almacenados en el disco duro local.",
        isCorrect: false,
        rationale:
          "Incorrecto. Eso corresponde al almacenamiento local (Local Storage).",
      },
      {
        text: "Datos almacenados en servidores de terceros accesibles por Internet.",
        isCorrect: true,
        rationale:
          "¡Correcto! La nube consiste en infraestructura externa administrada por un proveedor a la que accedemos vía web.",
      },
      {
        text: "Una red privada sin acceso a Internet.",
        isCorrect: false,
        rationale:
          "Incorrecto. Sin internet no es posible interactuar con servicios de almacenamiento en la nube públicos.",
      },
      {
        text: "Un programa para renderizar código HTML.",
        isCorrect: false,
        rationale:
          "Incorrecto. Eso describe la función de un navegador web, no de un sistema de almacenamiento.",
      },
    ],
  },
  {
    question: "¿Cuál de las siguientes es una ventaja del cloud storage?",
    hint: "Pista útil para responder: Opción correcta C. Se enfoca en el ahorro económico en infraestructura física.",
    options: [
      {
        text: "Funciona perfectamente sin Internet.",
        isCorrect: false,
        rationale:
          "Incorrecto. Requiere obligatoriamente de conexión a internet para sincronizar datos.",
      },
      {
        text: "Es completamente inmune a los hackers.",
        isCorrect: false,
        rationale:
          "Incorrecto. Ningún sistema conectado a internet es 100% inmune, aunque tenga alta seguridad.",
      },
      {
        text: "No necesitas comprar hardware de almacenamiento costoso.",
        isCorrect: true,
        rationale:
          "¡Correcto! Te ahorras el gasto de comprar discos duros físicos masivos o servidores propios.",
      },
      {
        text: "Tienes control físico absoluto de los servidores.",
        isCorrect: false,
        rationale:
          "Incorrecto. El control físico lo tiene el proveedor (como Google, Amazon o Microsoft), no tú.",
      },
    ],
  },
  {
    question: "¿Cuál de estos NO es un componente principal de una URL?",
    hint: "Pista útil para responder: Opción correcta D. Es una medida de seguridad local de tu red hogareña.",
    options: [
      {
        text: "Protocol",
        isCorrect: false,
        rationale:
          "Incorrecto. El protocolo (como http o https) sí es un componente esencial de la URL.",
      },
      {
        text: "Domain name",
        isCorrect: false,
        rationale:
          "Incorrecto. El nombre de dominio (como google.com) es clave para identificar el servidor en la URL.",
      },
      {
        text: "Web page name",
        isCorrect: false,
        rationale:
          "Incorrecto. La ruta o nombre de la página específica forma parte de la anatomía de la URL.",
      },
      {
        text: "Wi-Fi password",
        isCorrect: true,
        rationale:
          "¡Correcto! La contraseña de tu Wi-Fi es una credencial de red local y jamás se incluye en una URL pública.",
      },
    ],
  },
  {
    question:
      "Si ves https:// al inicio de una dirección, ¿qué parte de la URL es?",
    hint: "Pista útil para responder: Opción correcta C. Determina el conjunto de reglas de comunicación.",
    options: [
      {
        text: "Web page name",
        isCorrect: false,
        rationale:
          "Incorrecto. El nombre de la página va al final de la dirección, después del dominio.",
      },
      {
        text: "Domain name",
        isCorrect: false,
        rationale:
          "Incorrecto. El dominio es el nombre del sitio web (ej. cambridge.org), no el prefijo de transferencia.",
      },
      {
        text: "Protocol",
        isCorrect: true,
        rationale:
          "¡Correcto! https:// representa el protocolo seguro de transferencia de hipertexto.",
      },
      {
        text: "File name",
        isCorrect: false,
        rationale:
          "Incorrecto. El nombre de archivo indica un documento específico dentro del servidor, no el método de acceso.",
      },
    ],
  },
  {
    question: "¿Cuál es una desventaja crítica del cloud storage?",
    hint: "Pista útil para responder: Opción correcta C. Piensa en qué pasa si se corta el servicio de tu proveedor de internet.",
    options: [
      {
        text: "No requiere mantenimiento físico del usuario.",
        isCorrect: false,
        rationale:
          "Incorrecto. Esto es en realidad una gran ventaja, no una desventaja.",
      },
      {
        text: "Solo se puede acceder desde una sola computadora.",
        isCorrect: false,
        rationale:
          "Incorrecto. Al contrario, se puede acceder desde cualquier dispositivo con internet.",
      },
      {
        text: "Si falla tu conexión a Internet, pierdes acceso a los datos.",
        isCorrect: true,
        rationale:
          "¡Correcto! La dependencia absoluta de la conectividad es su talón de Aquiles.",
      },
      {
        text: "Ocupa mucho espacio en tu escritorio.",
        isCorrect: false,
        rationale:
          "Incorrecto. Al ser virtual, libera espacio físico en tu área de trabajo.",
      },
    ],
  },
  {
    question:
      "¿Qué servicio web está diseñado principalmente para la edición colaborativa de artículos?",
    hint: "Pista útil para responder: Opción correcta A. El ejemplo más famoso del mundo de este formato es Wikipedia.",
    options: [
      {
        text: "Wiki",
        isCorrect: true,
        rationale:
          "¡Correcto! Una Wiki permite que múltiples usuarios editen, modifiquen y creen contenido de forma comunitaria.",
      },
      {
        text: "Blog",
        isCorrect: false,
        rationale:
          "Incorrecto. El blog suele tener un autor principal (o equipo cerrado) y los usuarios solo comentan.",
      },
      {
        text: "Local storage",
        isCorrect: false,
        rationale:
          "Incorrecto. Esto refiere a guardar archivos en tu máquina privada, no a colaborar en la web.",
      },
      {
        text: "ISP",
        isCorrect: false,
        rationale:
          "Incorrecto. Un ISP es el proveedor de servicios de internet (tu compañía de cable/fibra), no una plataforma de edición.",
      },
    ],
  },
  {
    question:
      "¿Qué servicio web muestra publicaciones cronológicas, similar a un diario digital?",
    hint: "Pista útil para responder: Opción correcta B. Viene de la evolución de las bitácoras web ('Weblogs').",
    options: [
      {
        text: "Wiki",
        isCorrect: false,
        rationale:
          "Incorrecto. Las Wikis se organizan por temas enciclopédicos e hipervínculos, no de forma estrictamente cronológica.",
      },
      {
        text: "Blog",
        isCorrect: true,
        rationale:
          "¡Correcto! Los blogs muestran los artículos de la publicación más reciente a la más antigua.",
      },
      {
        text: "URL",
        isCorrect: false,
        rationale:
          "Incorrecto. La URL es la dirección de texto de un recurso, no un formato de contenido diario.",
      },
      {
        text: "Cloud storage",
        isCorrect: false,
        rationale:
          "Incorrecto. Es un baúl virtual de archivos, no un diario legible para el público.",
      },
    ],
  },
  {
    question:
      "Si guardo un archivo en el disco duro interno de mi laptop, estoy usando:",
    hint: "Pista útil para responder: Opción correcta C. El recurso físico te pertenece por completo y está en tu hardware.",
    options: [
      {
        text: "Cloud storage",
        isCorrect: false,
        rationale:
          "Incorrecto. No estás usando servidores de terceros ni internet para resguardarlo.",
      },
      {
        text: "Social networks",
        isCorrect: false,
        rationale:
          "Incorrecto. Las redes sociales sirven para interactuar con comunidades, no para almacenamiento interno básico.",
      },
      {
        text: "Local storage",
        isCorrect: true,
        rationale:
          "¡Correcto! El almacenamiento local guarda la información directamente en los componentes físicos del dispositivo del usuario.",
      },
      {
        text: "Web server",
        isCorrect: false,
        rationale:
          "Incorrecto. Un servidor web distribuye páginas al exterior, tu laptop funciona aquí simplemente como cliente local.",
      },
    ],
  },
  {
    question:
      "En la dirección https://www.cambridge.org/home, ¿qué representa cambridge.org?",
    hint: "Pista útil para responder: Opción correcta C. Es la identidad o nombre registrado de la organización en la red.",
    options: [
      {
        text: "Protocol",
        isCorrect: false,
        rationale: "Incorrecto. El protocolo es 'https://'.",
      },
      {
        text: "File name",
        isCorrect: false,
        rationale:
          "Incorrecto. El archivo o sección final en este caso es 'home'.",
      },
      {
        text: "Domain name",
        isCorrect: true,
        rationale:
          "¡Correcto! Es el nombre de dominio que traduce la dirección IP del servidor a texto amigable.",
      },
      {
        text: "Cloud server",
        isCorrect: false,
        rationale:
          "Incorrecto. El servidor en la nube es la máquina física, cambridge.org es solo su dirección lógica.",
      },
    ],
  },

  // PARTE B: VERDADERO O FALSO
  {
    question:
      "El cloud storage requiere que el usuario compre servidores físicos para su casa.",
    hint: "Pista útil para responder: Opción correcta Falso. Recuerda quién se encarga del hardware en la nube.",
    options: [
      {
        text: "Verdadero",
        isCorrect: false,
        rationale:
          "Incorrecto. Si compraras los servidores, estarías montando una infraestructura local, no usando la nube pública.",
      },
      {
        text: "Falso",
        isCorrect: true,
        rationale:
          "¡Correcto! El proveedor de la nube es quien compra, aloja y mantiene los servidores físicos en sus propios centros de datos.",
      },
    ],
  },
  {
    question: "Una de las partes principales de una URL es el 'domain name'.",
    hint: "Pista útil para responder: Opción correcta Verdadero. Piensa en cómo identificas a qué sitio web quieres entrar.",
    options: [
      {
        text: "Verdadero",
        isCorrect: true,
        rationale:
          "¡Correcto! El nombre de dominio indica específicamente a qué servidor web se está apuntando la solicitud.",
      },
      {
        text: "Falso",
        isCorrect: false,
        rationale:
          "Incorrecto. El dominio es un pilar fundamental; sin él, la URL no sabría a dónde dirigirse.",
      },
    ],
  },
  {
    question:
      "Las Wikis no permiten que otros usuarios editen la información publicada.",
    hint: "Pista útil para responder: Opción correcta Falso. Recuerda el principio de colaboración colectiva.",
    options: [
      {
        text: "Verdadero",
        isCorrect: false,
        rationale:
          "Incorrecto. Una plataforma que bloquea la edición general actúa como un sitio estático, no como una Wiki.",
      },
      {
        text: "Falso",
        isCorrect: true,
        rationale:
          "¡Correcto! La característica esencial de una Wiki es que cualquier usuario autorizado (o el público general) puede editar el contenido.",
      },
    ],
  },
  {
    question:
      "En el almacenamiento local, el usuario es el único responsable de la seguridad física de su disco duro.",
    hint: "Pista útil para responder: Opción correcta Verdadero. Evalúa quién tiene el control del dispositivo físico.",
    options: [
      {
        text: "Verdadero",
        isCorrect: true,
        rationale:
          "¡Correcto! Al estar en tu posesión física, si tu laptop se moja o se golpea, eres responsable de la pérdida de datos.",
      },
      {
        text: "Falso",
        isCorrect: false,
        rationale:
          "Incorrecto. Ninguna empresa externa cuida de tus dispositivos locales; recae enteramente en el dueño.",
      },
    ],
  },
  {
    question: "Un blog es un tipo de cloud storage.",
    hint: "Pista útil para responder: Opción correcta Falso. Compara un diario público con un disco duro virtual.",
    options: [
      {
        text: "Verdadero",
        isCorrect: false,
        rationale:
          "Incorrecto. Aunque el blog esté alojado en la nube, su función no es guardar archivos privados del usuario.",
      },
      {
        text: "Falso",
        isCorrect: true,
        rationale:
          "¡Correcto! Un blog es un formato de publicación de contenidos web informativos o personales, no un servicio de almacenamiento masivo.",
      },
    ],
  },
  {
    question:
      "Si no tienes conexión a Internet, no puedes acceder a tus archivos guardados en cloud storage.",
    hint: "Pista útil para responder: Opción correcta Verdadero. Piensa en el puente necesario para conectar tu dispositivo al servidor remoto.",
    options: [
      {
        text: "Verdadero",
        isCorrect: true,
        rationale:
          "¡Correcto! Los datos están en un servidor distante, por lo que requieres una conexión activa para leerlos o descargarlos (a menos que los tengas previamente sincronizados de forma local).",
      },
      {
        text: "Falso",
        isCorrect: false,
        rationale:
          "Incorrecto. Sin red, tu dispositivo se encuentra aislado de los centros de datos en la nube.",
      },
    ],
  },
  {
    question:
      "Las redes sociales (Social Networks) requieren una URL para ser accedidas a través de un navegador web.",
    hint: "Pista útil para responder: Opción correcta Verdadero. Analiza cómo entras a Facebook, X o Instagram desde tu computadora.",
    options: [
      {
        text: "Verdadero",
        isCorrect: true,
        rationale:
          "¡Correcto! Cualquier plataforma que opere en la World Wide Web necesita un localizador (URL) para que el navegador sepa qué renderizar.",
      },
      {
        text: "Falso",
        isCorrect: false,
        rationale:
          "Incorrecto. Incluso las redes sociales se supeditan a la estructura básica de navegación web.",
      },
    ],
  },
  {
    question: "HTTP y HTTPS son ejemplos de protocolos utilizados en una URL.",
    hint: "Pista útil para responder: Opción correcta Verdadero. Fíjate en los caracteres del extremo izquierdo de las direcciones.",
    options: [
      {
        text: "Verdadero",
        isCorrect: true,
        rationale:
          "¡Correcto! Son las siglas de Hypertext Transfer Protocol (y su versión Segura), determinando el lenguaje de intercambio técnico.",
      },
      {
        text: "Falso",
        isCorrect: false,
        rationale:
          "Incorrecto. Sí corresponden exactamente a la definición de protocolos de red para la capa de aplicación web.",
      },
    ],
  },
  {
    question:
      "Una gran ventaja del cloud storage es que facilita el acceso a los datos desde cualquier dispositivo en el mundo.",
    hint: "Pista útil para responder: Opción correcta Verdadero. Piensa en la versatilidad de abrir tus archivos en tu teléfono o en un ciber.",
    options: [
      {
        text: "Verdadero",
        isCorrect: true,
        rationale:
          "¡Correcto! La ubicuidad es el punto fuerte de la nube: solo necesitas tus credenciales de acceso y conectividad.",
      },
      {
        text: "Falso",
        isCorrect: false,
        rationale:
          "Incorrecto. Negar esto iría en contra del principio fundamental de portabilidad por el cual se adopta la tecnología de la nube.",
      },
    ],
  },
  {
    question:
      "El 'local storage' depende del hardware de una empresa de terceros.",
    hint: "Pista útil para responder: Opción correcta Falso. Define a quién le pertenece el almacenamiento local.",
    options: [
      {
        text: "Verdadero",
        isCorrect: false,
        rationale:
          "Incorrecto. El almacenamiento local se ejecuta directamente sobre tus propios componentes de hardware.",
      },
      {
        text: "Falso",
        isCorrect: true,
        rationale:
          "¡Correcto! El almacenamiento local se sirve de los discos y memorias internas físicas del propio dispositivo que estás usando.",
      },
    ],
  },
];

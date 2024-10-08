function setDate() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    $(".js_time").text(`${hours}.${minutes}`);
  }
  
  let i = 0;
  let dialogForm = document.getElementById("form");
  
  const messageLoad = $(".message-loading");
  
  const showImage = () => {
    if (
      $(".js_text").prop("scrollHeight") >= $(".dialog__image").prop("offsetTop")
    ) {
      $(".product__image").addClass("active");
    }
  };
  
  async function sendMessage(...arr) {
    const scrollBottom = (id) => {
      const element = $(id);
      const lastElem = $(".js_text").children().last();
  
      if (
        element.prop("scrollHeight") - $(lastElem).innerHeight() - 100 <=
        element.prop("scrollTop") + element.prop("clientHeight")
      )
        element.animate(
          {
            scrollTop: element.prop("scrollHeight"),
          },
          800
        );
    };
  
    function loading(d) {
      setTimeout(() => {
        if (d === false) {
        } else {
          $(messageLoad).show();
          $(".js_text").append($(messageLoad));
        }
      }, d);
    }
  
    function delay(t) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve($(messageLoad).hide());
        }, t);
      });
    }
  
    const check = () => {
      return new Promise((resolve) => {
        $(".select__item").on("click", function (e) {
          $(this)
            .css("pointer-events", "none")
            .siblings(".select__item")
            .css("pointer-events", "none");
          $(".js_text").append(
            `<div class="dialog__reply"><div class="current-time current-time-right js_time"></div>${$(
              this
            ).text()}</div>`
          );
          setTimeout(() => {
            $(".dialog__reply").addClass("active");
          }, 100);
          resolve();
        });
      });
    };
  
    for (let i of arr) {
      showImage();
  
      await setDate();
      await loading(i.load);
      await delay(i.time);
      let newMessage = `<div class="dialog__message" style="width:${i.width}px"><div class="current-time current-time-left js_time"></div>${i.text}</div>`;
  
      if (i.text === undefined) {
      } else {
        $(".js_text").append($(newMessage));
        setTimeout(() => {
          $(".dialog__message").addClass("active");
        }, 100);
      }
  
      if (i.image === undefined) {
      } else {
        $(".js_text").append(
          $(
            `<img class="dialog__image img-fluid" style="width:${i.width}px" src="${i.image}" alt="">`
          )
        );
        setTimeout(() => {
          $(".dialog__image").addClass("active");
        }, 100);
      }
  
      if (i.form === undefined) {
      } else {
        $(dialogForm).removeClass("hidden").css("pointer-events", "initial");
        $(".js_text").append(dialogForm);
      }
  
      if (i.action === undefined) {
      } else {
        let obj = [...i.action];
        const selectItem = (item, width, display) => {
          if (!width) {
            $(".js_text").append(
              `<div class="select__item" style="display:${display}">${item}</div>`
            );
          } else if (!display) {
            $(".js_text").append(
              `<div class="select__item" style="width:${width}px">${item}</div>`
            );
          } else if (!width && !display) {
            $(".js_text").append(`<div class="select__item">${item}</div>`);
          } else {
            $(".js_text").append(
              `<div class="select__item" style="display:${display}; width:${width}px">${item}</div>`
            );
          }
        };
  
        for (let x = 0; x < i.action.length; x++) {
          selectItem(obj[x].text, obj[x].width, obj[x].display);
          setTimeout(() => {
            $(".select__item").addClass("active");
          }, 50);
        }
        await check();
      }
      await scrollBottom(".js_text");
    }
  }
  
  sendMessage(
    {
      load: 100,
      time: 1500,
      text: "Bienvenido a nuestro sitio web donde podrá obtener una consulta gratuita con el  especialista Maria Hernández. Responda algunas preguntas para comprender si tiene algún problema auditivo.",
      width: 630,
    },
    {
      load: 100,
      time: 2500,
      text: "Hola, mi nombre es Maria Hernández. Soy especialista en enfermedades de la audición y tengo 24 años de experiencia. Mi objetivo en la vida es ayudar a las personas a mejorar su capacidad auditiva. Estaré encantado de darle recomendaciones que le ayudarán a mejorar la condición de su audición. Solo necesita responder algunas preguntas.\n" +
          "¿Deberíamos empezar?",
      width: 630,
    },
    {
      load: 100,
      time: 1000,
      text: "¿Ha tenido discuciones con otros porque no escuchó lo que se dijo correctamente?",
      width: 630,
    },
    {
      load: 0,
      time: 500,
      action: [
        { text: "Sí" },
        { text: "No" },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Con qué frecuencia tiene dificultad para entender las voces de las mujeres o las voces de los niños?",
      width: 630,
    },
    {
      load: 0,
      time: 500,
      action: [
        { text: "Poco frecuentemente" },
        { text: "Algunas veces" },
        { text: "Con frecuencia" },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Tiene algún caso de exposición excesiva al ruido en el trabajo?",
      width: 630,
    },
    {
      load: 0,
      time: 500,
      action: [
        {
          text: "Sí",
        },
        {
          text: "No",
        },
      ],
    },
    {
      load: 100,
      time: 1500,
      text: "¿Con qué frecuencia se le dificulta entender la voz por teléfono?",
      width: 630,
    },
    {
      load: 0,
      time: 500,
      action: [
        {
          text: "Poco frecuentemente",
        },
        {
          text: "Algunas veces",
        },
        {
          text: "Con frecuencia",
        },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Con qué frecuencia aumenta el volumen de su televisor para escucharlo mejor?",
      width: 630,
    },
    {
      load: 0,
      time: 500,
      action: [
        {
          text: "Poco frecuentemente",
        },
        {
          text: "Algunas veces",
        },
        {
          text: "Con frecuencia",
        },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Sientes que escuchas pero no entiendes todas las palabras, o las personas parecen balbucear cuando te hablan?",
      width: 630,
    },
    {
      load: 0,
      time: 500,
      action: [
        {
          text: "Sí",
        },
        {
          text: "Realmente no",
        },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Con qué frecuencia tiene problemas de audición en situaciones ruidosas como restaurantes, grandes reuniones o lugares públicos?",
      width: 630,
    },
    {
      load: 0,
      time: 500,
      action: [
        {
          text: "Poco frecuentemente",
        },
        {
          text: "Algunas veces",
        },
        {
          text: "Con frecuencia",
        },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Oye tinnitus o pitidos, zumbidos o silbidos en uno o ambos oídos?",
      width: 630,
    },
    {
      load: 0,
      time: 500,
      action: [
        {
          text: "Sí",
        },
        {
          text: "No",
        },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Con qué frecuencia evitas las situaciones sociales, como su pasatiempo favorito o dejar de comunicarse con otros debido a los problemas auditivos?",
      width: 630,
    },
    {
      load: 0,
      time: 500,
      action: [
        {
          text: "Poco frecuentemente",
        },
        {
          text: "Algunas veces",
        },
        {
          text: "Con frecuencia",
        },
      ],
    },
    {
      load: 100,
      time: 1500,
      text: "Gracias por las respuestas. Obviamente, usted tiene algunos problemas de audición. Según las estadísticas, hoy en día, alrededor del 6% de la población total del mundo sufre una pérdida auditiva severa, lo que significa que su calidad de vida se reduce notablemente, no pueden comunicarse por completo y sin dificultad, participar en la vida social.",
      width: 630,
    },
    {
      load: 100,
      time: 3000,
      text: "Algunos consejos para mantener su audición.\n" +
          "Si su profesión está relacionada con el ruido, observe las precauciones de seguridad, asegúrese de usar equipo de protección cuando se encuentre en una habitación ruidosa.\n" +
          "Cuidar del sonido al  escuchar música. Use auriculares con cancelación de ruido, no encienda la música a todo volumen. El volumen al que puede escuchar su propia voz se considera inofensivo.\n" +
          "Pero si encuentra los primeros signos de discapacidad auditiva, debe actuar de inmediato.",
      width: 630,
    },
      {
        load: 100,
        time: 2000,
        image: "./img/4.png",
        width: 400,
      },
    {
      load: 100,
      time: 3000,
      text: "Mi recomendación personal para ti es <span class='blue-text font-weight-700'>Difoflex</span>. Es un complemento en forma de píldoras que puede ayudarte a mejorar la calidad de tu audición.",
      width: 630,
    },
  
    {
      load: 100,
      time: 2000,
      text: "Se lo recomiendo a mis pacientes y todos están satisfechos con los resultados. Déjame explicarte por qué funciona.",
      width: 630,
    },
    {
      load: 100,
      time: 1500,
      text: "Hay ciertas vitaminas para la pérdida de audición en la composición de <span class='blue-text font-weight-700'>Difoflex</span> que son preventivas. Como:",
      width: 630,
    },
    {
      load: 100,
      time: 1500,
      text: "El magnesio es un mineral recomendado para la prevención de la pérdida de audición inducida por ruido. La evidencia muestra que el magnesio desempeña un papel en la lucha contra los peligrosos radicales libres, que se generan comúnmente cuando una persona se expone a ruidos fuertes.",
      width: 630,
    },
    {
      load: 100,
      time: 2500,
      text: "Por otro lado, el magnesio también se considera uno de los mejores suplementos para el tinnitus. El magnesio puede ser la clave para disminuir los síntomas graves de la afección al:",
      width: 630,
    },
    {
      load: 100,
      time: 2000,
      text: "<b>Mejorar el flujo sanguíneo.</b><br><b>Mantener los vasos sanguíneos relajados.</b><br><b>Reducir la aparición de síntomas más graves.</b>",
      width: 630,
    },
    {
      load: 100,
      time: 2200,
      text: "<span class='purpur-text'>La vitamina E</span> previene la formación de  radicales libres peligrosos, que dañan el oído interno. Los estudios han demostrado que una dieta rica en esta vitamina, junto con magnesio, tiene el potencial de limitar la posible pérdida de audición.",
      width: 630,
    },
    {
      load: 100,
      time: 1000,
      text: "Tiene sentido porque también se sabe que <span class='purpur-text'>la vitamina E</span> es un antioxidante extremadamente fuerte. Asegurese de que su cuerpo tenga un suministro adecuado de antioxidantes esto es crucial para una buena salud en todos los aspectos. El ácido fólico se considera una de las mejores vitaminas para  la audición debido a su impacto en la homocisteína. La homocisteína es un aminoácido que puede afectar el flujo sanguíneo de diferentes áreas del cuerpo, incluido el oído interno. El ácido fólico metaboliza activamente la homocisteína, lo que puede reducir la aparición de pérdida auditiva neurosensorial.",
      width: 630,
    },
    {
      load: 100,
      time: 2000,
      text: "Además, el ácido fólico es efectivo para neutralizar los radicales libres, preservando así las delicadas células del oído interno por más tiempo. Las primeras investigaciones demuestran que esta combinación de vitaminas es la mejor para proteger su audición contra la pérdida auditiva inducida por el ruido.",
      width: 630,
    },
    {
      load: 100,
      time: 2000,
      text: "Así que puedo decir con confianza que las píldoras <span class='blue-text font-weight-700'>Difoflex</span> son la mejor opción para usted. Por cierto, tengo buenas noticias para ti. Usted es mi cliente número 1000, por lo que puede pedir <span class='blue-text font-weight-700'>Difoflex</span> con <span class='red-text font-weight-700'>un 50 % de descuento.</span>",
      width: 630,
    },
    {
      load: 100,
      time: 1500,
      form: true,
    },
  );
  
  
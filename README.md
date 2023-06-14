# Kata-FizzBuzz-en-JEST

Introducción
 
Esta kata, inspirada en un popular juego de matemáticas para niños (o juego de beber para universitarios), es un punto de partida en el camino de TDD y está diseñada para ser una primera etapa semi-guiada para aprender TDD desde cero.
 
Haremos hincapié en lo siguiente:

Escribir un test de fallo para un comportamiento simple.
Implementar la menor cantidad de código necesaria para que el test pase.
A medida que añadas más tests, refactoriza para hacer el código más genérico y apropiado.
Instrucciones
Escribe una función que tome enteros positivos y muestre su representación en cadena.

Tu función debe cumplir las siguientes normas adicionales:

Si el número es múltiplo de tres, devolverá la palabra "Fizz".
Si el número es múltiplo de cinco, devolverá la palabra "Buzz".
Si el número es múltiplo de tres y de cinco, devolverá la palabra "FizzBuzz".
Por ejemplo, dados los números del 1 al 15 en orden, la función devolvería:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
Para empezar
Como probablemente sea tu primer intento de TDD clásico, esta página te servirá de introducción. Recorreremos los primeros ciclos de TDD, mostrando los distintos pasos, e intentaremos explicar los fundamentos de las decisiones que tomamos.

Inicialmente, no tenemos pruebas, ni código, pero el "sistema" puede considerarse Verde porque no tenemos tests que fallen. La primera acción es pasar a un estado Rojo (al menos una prueba falla). 

PRIMER CICLO
Rojo: Escribir la primera prueba fallida
Para escribir la primera prueba, intentaremos encontrar la unidad de funcionalidad más simple que podamos. En este caso, recordemos que el programa toma enteros positivos como entrada. El menor número entero positivo es 1, así que vamos a empezar con una prueba para eso.

class FizzBuzzShould {
@Test
void convert_1_to_1() {
assertEquals("1", new FizzBuzz().convert(1));
}
}
 
Merece la pena considerar brevemente los consejos generales sobre la denominación de las pruebas. Piensa en el nombre que das a tus pruebas, ya que mantenerlas y modificarlas se convertirá en un "coste" para tu desarrollo. Lee la sección que aparece al final sobre: ¿Por qué nombras tus pruebas como lo haces?

Esto fallará al compilar porque la clase FizzBuzz no existe. Ahora que tenemos una prueba que falla (¡un fallo de compilación sigue siendo un fallo!), podemos escribir el código de producción suficiente para que la prueba compile:

public class FizzBuzz {
public String convert(int number) {
throw new UnsupportedOperationException("implement me!");
}
}
 
La prueba ahora falla con:

java.lang.UnsupportedOperationException: implement me!

at com.codurance.fizzbuzz.FizzBuzz.convert(FizzBuzz.java:5)
at FizzBuzzShould.convert_1_to_1(FizzBuzzShould.java:9)
....
Verde: Escribir código para pasar la prueba
Aquí aplicaremos el primer principio de TDD:

No debes escribir ningún código de producción a menos que sea para hacer pasar una prueba unitaria fallida.

¿Cuál es el código más sencillo para que la prueba salga en verde? Es sólo para devolver una constante:

public String convert(int number) {
return "1";
}
 
Esto se conoce como "fingir". No te preocupes demasiado por esto.

Algunos de los principios rectores de TDD son "KISS" (o keep it simple stupid), y "YAGNI" (you ain't gonna need it). Estos dos principios son sutilmente diferentes, pero ambos coinciden en que, en el contexto de TDD, el objetivo debe ser escribir el código suficiente para pasar la prueba, utilizando la solución más sencilla para hacerlo. Esto ayuda a mantener el diseño lo más limpio y claro posible.

Una de las cualidades aparentemente mágicas de TDD es que, aunque parte del código parezca contraintuitivo al principio, si te concentras en la solución más sencilla posible, surgirá una solución elegante a medida que añadas pruebas. Cíñete a la solución más fácil posible e introduce complejidad adicional sólo cuando sea necesario.

Muchos desarrolladores sienten el impulso de predecir por dónde deben ir los cambios en el código - resiste este impulso. La belleza de TDD es que a medida que avances empezarás a introducir las características necesarias para la solución deseada, pero te guiarás por las pruebas, y las pruebas confirmarán esos cambios una vez que estén en su lugar.

Incluso Kent Beck, el pionero de TDD, ha sugerido un principio propio: "Fíngelo hasta que lo consigas". Esto es lo que acabamos de hacer.

Etapa de refactorización
No hay duplicación en el código que pueda eliminarse, así que aún no hay que refactorizar.

¡Felicidades! Has completado un ciclo completo de TDD clásico. Ahora repetimos el proceso.

SEGUNDO CICLO
Rojo
Para decidir qué escribir como siguiente prueba, hay que impulsar el desarrollo basado en pruebas.

¿Hacia qué comportamiento concreto de la especificación nos dirigimos?

En nuestra opinión, está en la primera línea:

Escribe una función que tome enteros positivos y muestre su representación en cadena

Nuestro código ha dado el primer paso para implementar esta función, pero aún no es correcto: convert(2) devolverá "1".

Nuestra siguiente prueba puede apuntar a esto:

@Test
void convert_2_to_2() {
assertEquals("2", new FizzBuzz().convert(2));
}
Verde
Lo más sencillo para que esto pase es añadir una simple sentencia if :

public String convert(int number) {
if (number == 2) return "2";
return "1";
}
 
Esta es la siguiente estrategia de implementación después de "Fingirlo" que es "Implementación Obvia" - básicamente si la implementación es obvia, codifícala.

Ten paciencia. Para un desarrollador experimentado, estos pasos parecen triviales e innecesarios. Y para los desarrolladores que tienen mucha experiencia en TDD, a veces se saltan estos pasos. Pero cualquier disciplina consiste en aprender a hacerlo correctamente, y practicar hasta que se interiorice y se convierta en algo natural. Cuando se aprende a tocar el piano, hay que practicar las escalas y los palillos. Lo mismo ocurre con la TDD. 

Etapa de refactorización
Ahora hay cierta duplicación tanto en la implementación como en las pruebas. Sin embargo, no queremos intentar refactorizar todavía.

Aunque normalmente el código debería ajustarse al principio de "No te repitas" (también conocido como DRY), eso no significa que tengas que refactorizar sin remordimientos la duplicación en cuanto la veas. Hay un principio rector más sutil que merece la pena tener en cuenta y que consiste en aplazar la toma de decisiones. Los diseñadores experimentados saben que las mejores decisiones se toman con la máxima información posible. Por tanto, los diseñadores pragmáticos intentan aplazar las decisiones de diseño todo lo que pueden.

No se trata de ignorar la duplicación, sino de tolerarla durante un breve periodo de tiempo, como contrapartida para obtener una imagen más clara de cualquier patrón emergente en tu código. A veces, si se elimina inmediatamente un patrón de duplicación, se obtienen diseños menos óptimos. Al esperar a que la duplicación se produzca tres veces, se permite la posibilidad de que surja un patrón más sutil que requiera una decisión de diseño diferente. 

Así que, hasta que no veamos tres casos de redundancia obvia, aplazaremos su eliminación. Esto se conoce como la Regla de Tres.

TERCER CICLO
Rojo
Seguimos avanzando hacia una función que genere la representación en cadena de los números enteros positivos: ésta es nuestra primera "funcionalidad", por pequeña que sea. Preferimos no añadir más "funcionalidades" (por ejemplo, imprimir Fizz en lugar de 3) hasta que la actual esté totalmente implementada.

Además, en este caso, las demás reglas son casos especiales sobre un caso base. Así que tiene sentido acabar con el caso base antes de pasar al siguiente comportamiento.

Así que elegimos otro número regular, evitando lo que sabemos que se convertirá en Fizz, para nuestra siguiente prueba:

@Test
void convert_4_to_4() {
assertEquals("4", new FizzBuzz().convert(4));
}
Verde
La solución más sencilla para que la prueba pase sigue siendo añadir otra sentencia if:

public String convert(int number) {
if (number == 4) return "4";
if (number == 2) return "2";
return "1";
}
Refactorizar
Ahora podemos detectar fácilmente una violación de la regla de tres en la aplicación. Es una oportunidad para pasar de una solución específica a otra más genérica:

public String convert(int number) {
return String.valueOf(number);
}
También es importante mantener la duplicación lo más baja posible en las pruebas, así que convertimos nuestros tres métodos en un caso de prueba parametrizado:

@ParameterizedTest
@CsvSource({ "1,1", "2,2", "4,4" })
void convert_number_to_FizzBuzz_string(int input, String expectedOutput) {
assertEquals(expectedOutput, new FizzBuzz().convert(input));
}
 

 

CUARTO CICLO
En el primer al tercer ciclo, estábamos tratando con el requisito más genérico de la función: que toma enteros positivos y emite su representación de cadena.

La refactorización de String.valueOf() que hicimos en el último ciclo ha tenido un gran efecto: por inducción podemos ver que la implementación vale para todos los enteros positivos que no son múltiplos de 3 o 5, no sólo para los tres casos de prueba que tenemos.

Esto es fantástico: ¡nuestras pruebas nos han llevado a un algoritmo genérico sencillo!

Sin embargo, si echamos un vistazo a la especificación, veremos que tenemos otros tres comportamientos sin implementar:

Devuelve Fizz para múltiplos de 3
Devuelve Buzz para múltiplos de 5
Devuelve FizzBuzz para múltiplos de 3 y 5
Llegados a este punto, tenemos un algoritmo incompleto en su implementación pero que cubre el mayor caso de uso (genérico). Ahora intentamos utilizar la tercera estrategia de implementación de la triangulación. Para ello, creamos un caso de prueba específico, que obliga a cambiar el comportamiento de su código.

Se trata de una estrategia realizada como un pequeño paso, donde la implementación para las pruebas específicas puede revelar los patrones subyacentes que darán pistas para la eventual solución genérica.

Así que para empezar a implementar el comportamiento Fizz , podemos añadir una prueba para un caso específico: el número 3. Añadiendo esta prueba e implementando el código para satisfacerla empezaremos a revelar el cambio en el comportamiento.

Rojo
Añadimos una nueva prueba:

@Test
void convert_3_to_Fizz() {
assertEquals("Fizz", new FizzBuzz().convert(3));
}
 

Esperamos que falle - espera Fizz, pero nuestro código le dará 3. Efectivamente, falla:

org.opentest4j.AssertionFailedError:
Expected :Fizz
Actual :3
 

Verde
La forma más sencilla de implementarlo es con una simple condición if:

String convert(int i) {
if (i == 3) return "Fizz";
return String.valueOf(i);
}
 
Observa que, una vez más, sólo hemos implementado el código necesario para que la prueba pase. Puede que tengamos una buena idea de por dónde va el algoritmo, pero es importante no adelantarse: dejemos que las pruebas nos marquen el camino.

Refactorizar
No hay duplicación obvia aquí, así que no hay nada que refactorizar.

Ahora, ¡te toca a ti!
Intenta implementar el resto del ejercicio por tu cuenta:

Termina la implementación de 'Fizz' ampliando la funcionalidad actual a múltiplos de 3
Implementa el comportamiento Buzz para números que sean múltiplos de 5
Por último, las reglas de FizzBuzz
Preguntas frecuentes
¿No es innecesariamente complicado?
Puede parecerlo por ahora, porque esta kata es lo suficientemente sencilla como para que una solución completa se sugiera inmediatamente a la mayoría de los desarrolladores. Sin embargo, considera esto: a menudo estarás diseñando algoritmos que son demasiado grandes para razonarlos de una sola vez. Cuando eso ocurre, escribir primero lo más sencillo y construirlo poco a poco empieza a parecer una propuesta mucho más atractiva. Es decir, TDD se adapta muy bien.

¿Qué pasa con las entradas no válidas?
Cuando hacemos katas, nos gusta centrarnos en el camino feliz. Ciertamente, hay un momento y un lugar para protegerse de las entradas erróneas (por ejemplo, en las interfaces de usuario), pero eso no es lo que estamos practicando aquí. Además, un buen diseño de código sugeriría separar la responsabilidad de comprobar la validez de la entrada de la de ejecutar el algoritmo. Así que si esto fuera un sistema real, la clase FizzBuzz podría estar envuelta por una clase FizzBuzzInputChecker que asegurara que FizzBuzz sólo recibiera números válidos.

¿Por qué nombras tus pruebas como lo haces?
Uno de los inconvenientes de TDD es que la gente reconoce tarde que las pruebas forman parte de la base de código tanto como el propio código. Al principio, se comete el error de tratar las pruebas como código de segunda clase, inferior al código que implementa el software. Casi todo el mundo se da cuenta de que las pruebas son tan importantes como el código de implementación.

Una de las grandes ventajas de las pruebas es que, cuando se rompen, permiten a los desarrolladores saber rápidamente dónde se ha producido el problema. La forma de nombrar una prueba puede ayudar o dificultar este proceso.

Al nombrar una prueba, se recomienda abstenerse de:

Dar nombres técnicos a las pruebas, por ejemplo, "TotalSalesAggregatorReturnsInteger".
Nombrar las pruebas de forma que revelen detalles de implementación, por ejemplo, "ClientLookupReturnsTrue" o "SalesPriceDecoratorTest".
Tampoco es aconsejable asociar los nombres de las pruebas a los nombres de las clases en las que se basan. Esto se debe a que su código cambiará constantemente: las clases pueden cambiar de nombre o quedar obsoletas, o algunas de sus funciones pueden trasladarse a otra clase. Cada vez que cambies la configuración de las clases en tu código, te expones a romper las pruebas asociadas.

La mejor práctica para nombrar las pruebas es utilizar nombres que describan la funcionalidad o característica de la empresa. Esto permite refactorizar el código de forma que, siempre que el comportamiento empresarial siga siendo el mismo, no sea necesario cambiar el nombre de las pruebas.

Ampliación opcional
Una versión del juego FizzBuzz en la vida real añade un Fizz o Buzz extra cada vez que uno de los dígitos ('3' o '5') aparece en el propio número (por ejemplo, Dr Mike's Math Games for Kids).

Así, '3' se convertiría en FizzFizz, '5' en BuzzBuzz, '15' en FizzBuzzBuzz.

Modifica tu programa para reflejar este requisito manteniendo tu disciplina en el uso de los ciclos rojo-verde-refactor.

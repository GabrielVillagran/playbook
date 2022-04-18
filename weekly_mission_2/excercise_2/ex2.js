const explorers = [{
            names: "Explorer 1",
            exercises_completed: 10,
            rate: 99,
            city: "CDMX",
            stack: [
                "js",
                "c#"
            ],
            missions: {
                onboarding: {
                    isFinished: true,
                    exercisesFinished: true
                },
                frontend: {
                    isFinished: true,
                    exercisesFinished: true
                }
            }
        },
        {
            names: "Explorer 2",
            exercises_completed: 9,
            city: "Veracruz",
            rate: 50,
            stack: [
                "js"
            ],
            missions: {
                onboarding: {
                    isFinished: false,
                    exercisesFinished: false
                },
                frontend: {
                    isFinished: false,
                    exercisesFinished: false
                }
            }
        },
        {
            names: "Explorer 3",
            exercises_completed: 3,
            city: "Sonora",
            rate: 100,
            stack: [
                "elixir"
            ],
            missions: {
                onboarding: {
                    isFinished: true,
                    exercisesFinished: true
                },
                frontend: {
                    isFinished: false,
                    exercisesFinished: false
                }
            }
        }
    ]
    // Sobre esta lista, realiza lo siguiente:

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("names")
explorers.forEach(explorer => console.log("Nombre: %s", explorer.names))
console.log("==========================================================")

// Imprime el stack de cada explorer, usa FOR EACH
console.log("stacks")
explorers.forEach(explorer => console.log("Stack: %s", explorer.stack))
console.log("==========================================================")

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("array de los stack")
const stackArray = explorers.map((stacks) => stacks.stack)
console.log("stacks de explorer 1: %s", stackArray[0])
console.log("stacks de explorer 2: %s", stackArray[1])
console.log("stacks de explorer 3: %s", stackArray[2])
console.log("==========================================================")
console.log("array de stacks con JS")
const stackJS = stackArray.filter((stack_js) => stack_js.includes('js'))
console.log("stacks que incluyen js %s %s", stackJS[0], stackJS[1])

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("==========================================================")
console.log("Explorers con JS")
const explorerJS = explorers.filter((useJS) => useJS.stack.includes('js'))
console.log(explorerJS)

// Busca el primer explorer que sea de la CDMX, usa FIND
console.log("==========================================================")
console.log("Primer Explorer que vive en la CDMX")
const explorerCDMX = explorers.find((explorer_cdmx) => explorer_cdmx.city == 'CDMX')
console.log(explorerCDMX)

// Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("==========================================================")
console.log("Suma de ejercicios completados")
const sumEx = explorers.reduce((tot, explorer) => tot + explorer.exercises_completed, 0)
console.log("total de ejercicios comletados: %d", sumEx)

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("==========================================================")
console.log("Ejercicios terminados en frontend")
const frontEnd_complete = explorers.some((explorer_front) => explorer_front.missions.frontend.isFinished === true)
console.log(frontEnd_complete)

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log("==========================================================")
console.log("Verificar que todos terminaron el onboarding")
const onBoarding_Complete = explorers.every((explorer_onBoard) => explorer_onBoard.missions.onboarding.isFinished === true)
console.log(onBoarding_Complete)
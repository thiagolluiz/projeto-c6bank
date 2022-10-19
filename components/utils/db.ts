import TypeDb from "../../types/TypeDb";

const db:Array<TypeDb> = [
{
id: 1,
type: "pix",
amount: 100,
date: "2022-10-19",
description: "Pizza Galera",
operation: "credit"
},
{
id: 2,
type: "debit",
amount: 50,
date: "2022-10-17",
description: "Gasolina",
operation: "debit"
},
{
id: 3,
type: "ted",
amount: 10000,
date: "2022-10-16",
description: "Salario",
operation: "credit"
},
{
id: 4,
type: "pix",
amount: 20,
date: "2022-10-10",
description: "Joalheria",
operation: "debit"
},
{
id: 5,
type: "credit",
amount: 60,
date: "2022-10-10",
description: "McDonalds",
operation: "debit"
},
{
id: 6,
type: "credit",
amount: 10,
date: "2022-10-10",
description: "acai",
operation: "debit"
},
{
id: 7,
type: "pix",
amount: 150,
date: "2022-10-07",
description: "Tia Rose",
operation: "credit"
},
{
id: 8,
type: "debit",
amount: 10,
date: "2022-10-06",
description: "Padaria Tres Irmaos",
operation: "debit"
},
{
id: 9,
type: "debit",
amount: 50,
date: "2022-10-10",
description: "Cacau Show",
operation: "debit"
},
{
id: 10,
type: "credit",
amount: 500,
date: "2022-10-05",
description: "Note Usado SA",
operation: "debit"
}
]
export default db;
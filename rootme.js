var table =  [
    {
        "type": "Literal",
        "start": 387,
        "end": 395,
        "value": 65353704,
        "raw": "65353704"
    },
    {
        "type": "Literal",
        "start": 396,
        "end": 404,
        "value": 65353663,
        "raw": "65353663"
    },
    {
        "type": "Literal",
        "start": 405,
        "end": 413,
        "value": 65353663,
        "raw": "65353663"
    },
    {
        "type": "Literal",
        "start": 414,
        "end": 422,
        "value": 65353707,
        "raw": "65353707"
    },
    {
        "type": "Literal",
        "start": 423,
        "end": 431,
        "value": 65353680,
        "raw": "65353680"
    },
    {
        "type": "Literal",
        "start": 445,
        "end": 453,
        "value": 65353701,
        "raw": "65353701"
    },
    {
        "type": "Literal",
        "start": 454,
        "end": 462,
        "value": 65353663,
        "raw": "65353663"
    },
    {
        "type": "Literal",
        "start": 463,
        "end": 471,
        "value": 65353709,
        "raw": "65353709"
    },
    {
        "type": "Literal",
        "start": 472,
        "end": 480,
        "value": 65353680,
        "raw": "65353680"
    },
    {
        "type": "Literal",
        "start": 481,
        "end": 489,
        "value": 65353706,
        "raw": "65353706"
    },
    {
        "type": "Literal",
        "start": 503,
        "end": 511,
        "value": 65353710,
        "raw": "65353710"
    },
    {
        "type": "Literal",
        "start": 512,
        "end": 520,
        "value": 65353724,
        "raw": "65353724"
    },
    {
        "type": "Literal",
        "start": 521,
        "end": 529,
        "value": 65353718,
        "raw": "65353718"
    },
    {
        "type": "Literal",
        "start": 530,
        "end": 538,
        "value": 65353680,
        "raw": "65353680"
    },
    {
        "type": "Literal",
        "start": 539,
        "end": 547,
        "value": 65353707,
        "raw": "65353707"
    },
    {
        "type": "Literal",
        "start": 561,
        "end": 569,
        "value": 65353706,
        "raw": "65353706"
    },
    {
        "type": "Literal",
        "start": 570,
        "end": 578,
        "value": 65353696,
        "raw": "65353696"
    },
    {
        "type": "Literal",
        "start": 579,
        "end": 587,
        "value": 65353709,
        "raw": "65353709"
    },
    {
        "type": "Literal",
        "start": 588,
        "end": 596,
        "value": 65353705,
        "raw": "65353705"
    },
    {
        "type": "Literal",
        "start": 597,
        "end": 605,
        "value": 65353722,
        "raw": "65353722"
    },
    {
        "type": "Literal",
        "start": 619,
        "end": 627,
        "value": 65353724,
        "raw": "65353724"
    },
    {
        "type": "Literal",
        "start": 628,
        "end": 636,
        "value": 65353708,
        "raw": "65353708"
    },
    {
        "type": "Literal",
        "start": 637,
        "end": 645,
        "value": 65353710,
        "raw": "65353710"
    },
    {
        "type": "Literal",
        "start": 646,
        "end": 654,
        "value": 65353723,
        "raw": "65353723"
    },
    {
        "type": "Literal",
        "start": 655,
        "end": 663,
        "value": 65353702,
        "raw": "65353702"
    },
    {
        "type": "Literal",
        "start": 677,
        "end": 685,
        "value": 65353696,
        "raw": "65353696"
    },
    {
        "type": "Literal",
        "start": 686,
        "end": 694,
        "value": 65353697,
        "raw": "65353697"
    }
]

const apply = (op, l, r) =>
{ switch (op)
{ case '+':
    return l + r
    case 'OR':
        return l || r
    default:
        throw Error (`invalid operator: ${op}`)
}
}
const eval = (expr) =>
{ switch (expr.type)
{ case 'Literal':
    return expr.value
    case 'BinaryExpression':
        return apply
        ( expr.operator
            , eval (expr.left)
            , eval (expr.right)
        )
    default:
        throw Error (`invalid expression type: ${expr.type}`)
}
}

let sens = eval({
    "type": "BinaryExpression",
    "start": 247,
    "end": 271,
    "left": {
        "type": "BinaryExpression",
        "start": 247,
        "end": 266,
        "left": {
            "type": "BinaryExpression",
            "start": 247,
            "end": 261,
            "left": {
                "type": "BinaryExpression",
                "start": 247,
                "end": 256,
                "left": {
                    "type": "Literal",
                    "start": 248,
                    "end": 250,
                    "value": 10,
                    "raw": "10"
                },
                "operator": "+",
                "right": {
                    "type": "Literal",
                    "start": 253,
                    "end": 255,
                    "value": 45,
                    "raw": "45"
                }
            },
            "operator": "+",
            "right": {
                "type": "Literal",
                "start": 258,
                "end": 260,
                "value": 65,
                "raw": "65"
            }
        },
        "operator": "+",
        "right": {
            "type": "Literal",
            "start": 263,
            "end": 265,
            "value": 78,
            "raw": "78"
        }
    },
    "operator": "+",
    "right": {
        "type": "Literal",
        "start": 268,
        "end": 270,
        "value": 47,
        "raw": "47"
    }
})
sens = 0
console.log(sens)
console.log((sens >>= 4) == 20)
console.log(sens << 4)
console.log(sens)
let c = ""

table.map((obj) => {
    c += String.fromCharCode(obj.value ^ sens)
    console.log(obj.value ^ sens)
})

console.log(c)

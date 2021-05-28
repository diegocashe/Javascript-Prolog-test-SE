const pl = require('tau-prolog/modules/core');
require('tau-prolog/modules/promises')(pl);

const makeQueryEsCerca = (origen, destino) => `es_cercana(${origen}, ${destino}).`;

const esCerca = async (a, b) => {

    const goal = makeQueryEsCerca(a, b)
    const program = './test.pl';
    const session = pl.create(1000);
    const consult = await session.promiseConsult(program);
    const result = await session.promiseQuery(goal);

    const answer = await session.promiseAnswer();
    console.log(`${a} esta cerca de ${b}?: ${session.format_answer(answer)}`);
};


esCerca('maracaibo', 'coro')

esCerca('maracaibo', 'sancristobal')

esCerca('maracaibo', 'capital')

const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find() {
    return db('schemes')
        .then(schemes => {
            return schemes
        })
}

function findById(id) {
    return db('schemes')
        .where({ id: id })
        .then(scheme => {
            return scheme
        })
}

function findSteps(id) {
    return db('steps as st')
        .join('schemes as s', 'st.scheme_id', '=', 's.id')
        .select('s.id', 's.scheme_name','st.step_number','st.instructions')
        .where({ scheme_id: id})
        .then(steps => {
            return steps
        })

}

function add(scheme) {
    return db('schemes')
        .insert(scheme, 'id')
        .then(([id]) => {
            return db('schemes')
                .where({ id })
                .then(schemeEntry => {
                    return schemeEntry;
                })
        })
}

function addStep(step, id) {
    stepData = {
        step_number: step.step_number,
        instructions: step.instructions,
        scheme_id: id
    }

    return db('steps')
        .insert(stepData, 'id')
        .then(([id]) => {
            return db('steps')
                .where({ id })
                .then(stepEntry => {
                    return stepEntry;
                })
        })
}

function update(changes, id) {
    return db('schemes')
        .where({ id: id})
        .update(changes, 'schemeId')
        .then(count => {
            return count;
        })
}

function remove(id) {
    return db('schemes')
        .where({ id: id})
        .delete()
        .then(count => {
            return count
        })
} 
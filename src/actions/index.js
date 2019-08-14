export const addFeature = feature => {
    console.log('addFeature invoked')
    return { type: 'ADD_FEATURE', payload: feature }
}

export const removeFeature = feature => {
    console.log('removeFeature invoked')
    return { type: 'REMOVE_FEATURE', payload: feature }
}
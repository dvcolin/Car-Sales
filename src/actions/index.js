export const addFeature = feature => {
    console.log('addFeature invoked')
    return { type: 'ADD_FEATURE', payload: feature }
}
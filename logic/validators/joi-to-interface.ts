import { convertFromDirectory } from 'joi-to-typescript'

export default convertFromDirectory({
    schemaDirectory: './logic/validators/',
    typeOutputDirectory: './logic/types/',

    // disable information output
    debug: false
})

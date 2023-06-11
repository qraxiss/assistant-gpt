export function filter(object: any, projection: string[]) {
    const result = { ...object }

    for (let i in projection) {
        var key = projection[i]
        if (key in result) {
            delete result[key]
        }
    }

    return result
}

export function rename(o: any, old_key: string, new_key: string) {
    if (old_key === new_key) return o

    if (!o[old_key]) return o

    if (old_key !== new_key) {
        const result = { ...o }

        result[new_key] = result[old_key]
        delete result[old_key]
        return result
    }
}

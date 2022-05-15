export const get = async () => {

    const allWorksFiles = import.meta.glob(`../projects/en/*.md`)
    const iterableWorksFiles = Object.entries(allWorksFiles)


    const allWorks = await Promise.all(
        iterableWorksFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const workPath = path.slice(2, -3)

            return {
                meta: metadata,
                path: workPath,
            }
        })
    )

    return {
        body: allWorks
    }
}

import { useRoute } from 'vitepress'

export const getGithubUrl = (path?: string) => {
    const route = useRoute()
    return `https://github.com/RakhaaNZ/Smells/tree/main/docs${route.path}/${path}`
}
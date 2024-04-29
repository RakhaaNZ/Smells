import { useRoute } from 'vitepress'

export const getGithubUrl = (path?: string) => {
    const route = useRoute()
    return `${route.path}/${path}`
}
import {createInstance} from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import {initReactI18next} from 'react-i18next/initReactI18next'
import {getOptions} from './settings'

const initI18next = async (lng: string, ns: string | string[]) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(async (language: string, namespace: string | string[]) => {
        if (Array.isArray(namespace)) {
          return namespace.map(async ns => await import(`./locales/${language}/${ns}.json`))
        }
        return await import(`./locales/${language}/${namespace}.json`)
      }),
    )
    // @ts-expect-error
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function useTranslation(lng: string, ns?: string, options = {}) {
  const i18nextInstance = await initI18next(lng, ns ?? 'common')
  return {
    // @ts-expect-error
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance,
  }
}

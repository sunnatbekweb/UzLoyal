'use client';

import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/src/app/i18n';
import { createInstance, i18n as I18nInstance } from 'i18next';

interface TranslationsProviderProps {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources?: any;
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}: TranslationsProviderProps): JSX.Element {
  const i18n: I18nInstance = createInstance();

  useEffect(() => {
    initTranslations(locale, namespaces, i18n, resources);
  }, [locale, namespaces, i18n, resources]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
import { createContext } from 'react';
import { Translator } from '@tolkam/lib-translator';

const TranslatorContext = createContext<Translator>(null as unknown as Translator);

TranslatorContext.displayName = 'TranslatorContext';

export default TranslatorContext;

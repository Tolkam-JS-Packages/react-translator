import { IMessageParams } from '@tolkam/lib-translator';
import TranslatorContext from './context';
import { ReactElement } from 'react';

/**
 * Translator component
 *
 * @param children
 * @param params
 * @param language
 */
const Translator = ({children, params, language}: IProps): ReactElement | string => {
    return <TranslatorContext.Consumer>{(translator) => {
        if(language) {
            translator.useLanguage(language);
        }
        return translator.get(children, params);
    }}</TranslatorContext.Consumer>;
}

/**
 * Translator function
 *
 * @param children
 * @param params
 * @param language
 */
const t = (children: string, params?: IMessageParams, language?: string): string => {
    return Translator({children, params, language}) as string;
}

interface IProps {
    children: string;
    language?: string;
    params?: IMessageParams;
}

export default Translator;
export { TranslatorContext, t }

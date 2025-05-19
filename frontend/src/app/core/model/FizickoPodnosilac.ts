import {UserInfo} from './UserInfo';
import {AuthorInfo} from './AuthorInfo';

export interface FizickoPodnosilac {
  userInfo: UserInfo;
  isAuthorSubmitting: boolean;
  authors: AuthorInfo[];
  copyrightInfo: { // Dodajemo informacije o delu
    workType: string;
    otherWorkType?: string;
    title: string;
    altTitle?: string;
    recordFormat: string;
    otherRecordFormat?: string;
    isAdaptation: boolean | null;
    sourceTitle?: string;
    sourceAuthorInfo?: AuthorInfo; // Informacije o autoru originalnog dela
  };

}

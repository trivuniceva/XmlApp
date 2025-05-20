import {UserInfo} from './UserInfo';
import {AuthorInfo} from './AuthorInfo';


export interface PunomocnikPodnosilac {
  userInfo: UserInfo;
  authorInfo: AuthorInfo;
  copyrightInfo: {
    workType: string;
    otherWorkType?: string;
    title: string;
    altTitle?: string;
    recordFormat: string;
    otherRecordFormat?: string;
    isAdaptation: boolean | null;
    sourceTitle?: string;
    sourceAuthorInfo?: AuthorInfo;
  };
}

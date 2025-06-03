import {UserInfo} from './UserInfo';
import {AuthorInfo} from './AuthorInfo';

export interface PravnoPodnosilac {
  poslovnoIme: string;
  userInfo: UserInfo;
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

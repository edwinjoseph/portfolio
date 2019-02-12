export type ContentHandler<U> = (response: any) => U;

export interface CMSClient<T> {
  getContent<U>(pageType: string, pageUID: string, ref: string, contentHandler: ContentHandler<U>): PromiseLike<U>;
}

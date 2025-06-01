import type { PropsWithChildren } from 'react';
import type { RouteComponentProps } from 'react-router-dom';

export interface PropsWithClassName {
  className?: string;
}

export interface DefaultProviderProps extends PropsWithChildren {}
export interface DefaultComponentProps extends PropsWithChildren, PropsWithClassName {}
export interface DefaultPageComponentProps extends RouteComponentProps {}

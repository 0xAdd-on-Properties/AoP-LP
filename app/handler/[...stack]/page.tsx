import { StackHandler } from '@hexclave/next';
import { stackApp } from '@/lib/stack';

export default function Handler(props: unknown) {
  return <StackHandler fullPage app={stackApp} routeProps={props} />;
}

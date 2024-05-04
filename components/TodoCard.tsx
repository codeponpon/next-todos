import React from 'react'
import { Card, CardContent } from './ui/card';
import { Skeleton } from './ui/skeleton';

export const TodoCard = ({ loading, value }: { loading?: boolean; value: string }) => {
  return (
    <Card>
      <CardContent>
        <div className="text-xl font-bold pt-6 text-center">
          {loading && (
            <Skeleton>
              <span className="opacity-0">Todo</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
      </CardContent>
    </Card>
  );
};
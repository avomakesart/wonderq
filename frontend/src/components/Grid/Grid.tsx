import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode | ReactNode[];
  mdCols: string;
  lgCols: string;
  gap: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  mdCols,
  lgCols,
  gap,
}) => {
  return (
    <div
      className={`w-full grid gap-${gap} md:grid-cols-${mdCols} lg:grid-cols-${lgCols}`}
    >
      {children}
    </div>
  );
};

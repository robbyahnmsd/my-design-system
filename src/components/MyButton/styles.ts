//./src/components/Button/styles.ts
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Container = styled.button`
  ${tw`text-white text-3x font-bold text-center bg-red-900 rounded-full flex py-4 px-10 focus:outline-none cursor-pointer`}
  &:disabled {
    ${tw`bg-red opacity-75 cursor-not-allowed`}
  }
  &:hover:not(:disabled) {
    ${tw`bg-blue border-transparent shadow-xs`}
  }
  &:active:not(:disabled) {
    ${tw`bg-green border-transparent shadow-xs`}
  }
`;
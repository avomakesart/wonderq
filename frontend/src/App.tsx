import { Grid, MessageForm, MessageResult } from './components';
import { useGetMessage, useGetMessageProcessed } from './hooks';

function App() {
  const { message } = useGetMessage();
  const { messageProcessed } = useGetMessageProcessed();

  return (
    <div className='container mx-auto flex flex-col items-center pt-10'>
      <h1 className='mb-6 text-2xl font-semibold leading-relaxed tracking-tighter text-black sm:text-4xl title-font'>
        Welcome to WonderQ
      </h1>
      <p className='mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-1/2'>
        WonderQ is a simple queuing system that works awesome, wanna try?, just
        fill out the form below.
      </p>

      <Grid gap='10' mdCols='1' lgCols='2'>
        <MessageForm />
        <MessageResult message={message} msgProcess={messageProcessed} />
      </Grid>
    </div>
  );
}

export default App;

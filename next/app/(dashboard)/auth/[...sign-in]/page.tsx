interface SignInPageProps {
    params?: { 'sign-in': string };
  }
  
  const SignInPage: React.FC<SignInPageProps> = ({ params }) => {
    console.log(params?.['sign-in']);
    return <div>SignInPage</div>;
  };
  
  export default SignInPage;
  
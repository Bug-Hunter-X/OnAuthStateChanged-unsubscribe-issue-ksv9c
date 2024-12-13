import { onAuthStateChanged, auth } from './firebaseConfig'; // Assuming firebaseConfig.js correctly sets up Firebase

function AuthCheck() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup function to unsubscribe
  }, []);
  return (
    <div>
      {user ? <p>Signed in as {user.email}</p> : <p>Not signed in</p> 
    </div>
  );
}
export default AuthCheck;
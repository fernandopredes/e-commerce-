import { GhostSpinner, Ghost } from './SpinnerStyles';
const Spinner = () => {
  return (
    <GhostSpinner>
      <Ghost />
      <span>Carregando...</span>
    </GhostSpinner>
  );
};

export default Spinner;

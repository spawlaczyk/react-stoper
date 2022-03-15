import styles from './RenderTime.module.scss';

const RenderTime = ({ time }) => {
  const formatTime = time => {
    const millseconds = Math.floor(time % 1000);
    const seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);
    const minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
    const hours = ('0' + Math.floor((time / 36000000) % 24)).slice(-2);

    return `${hours}:${minutes}:${seconds}:${millseconds}`
  };

  return (
    <div className={styles.render}>
      { formatTime(time) }
    </div>
  );
}

export default RenderTime;
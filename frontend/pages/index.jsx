import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";
import NftCreator from "../components/nftCreator";

export default function Home({appState, setAppState}) {
  return (
    <div>
      <main className={styles.main}>
        {appState != "gallery" && <NftCreator />}
        {appState == "gallery" && <NFTGallery />}
      </main>
    </div>
  );
}

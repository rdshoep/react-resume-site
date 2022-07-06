export const handleWindowResize = () => {
    const windowWidth = document.body.clientWidth;
    const el = document.querySelector('.rs-view-inner') as HTMLElement;
    if (!el) {
        return;
    }
    const $container = document.querySelector('.SplitPane') as HTMLElement;
    const $leftPanel = $container.querySelector('.Pane.Pane1') as HTMLElement;
    const $resizer = $container.querySelector('.Resizer') as HTMLElement;
    const $leftPanel2 = $container.querySelector('.Pane.Pane2') as HTMLElement;
    const resetWidth = windowWidth - $leftPanel.clientWidth - $resizer.clientWidth;
    if (resetWidth >= 1000) {
        el.style.transform = `scale(1)`;
        el.style.marginLeft = `auto`;
    } else {
        $leftPanel2.style.width = `${resetWidth}px`;
        const $pane2Wrapper = $leftPanel2.querySelector('.rs-view-wrapper') as HTMLElement;
        const marginWidth = resetWidth * 0.2;
        const radio = Math.round(resetWidth * 0.8 / 794 * 100);
        el.style.transform = `scale(${radio / 100})`;
        el.style.margin = `40px ${marginWidth / 2}px 40px ${marginWidth / 2}px`;
    }
};
window.onload = () => {
    window.onresize = handleWindowResize;
}

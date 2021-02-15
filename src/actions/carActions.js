
export const DISPLAY_FEATURE = "DISPLAY_FEATURE";

export const displayFeature = (feature) => {
    return { type: DISPLAY_FEATURE, payload:feature }
}

console.log(displayFeature())
import React from "react"

export default function CallTime() {
    // Step 1: Today’s date
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const day = today.getDate()

    // Step 2: Define 9:00 AM in Los Angeles (PST/PDT auto-handled)
    const laDate = new Date(Date.UTC(year, month, day, 16, 0, 0))
    const laDatePlus8 = new Date(Date.UTC(year, month, day, 25, 0, 0))
    // 16:00 UTC ≈ 9:00 in LA (accounts for daylight saving automatically)

    // Step 3: Format that instant in the user’s local timezone
    const localTime = laDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    })
    const localTimePlus8 = laDatePlus8.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    })

    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZoneName: "short",
      })
      const parts = formatter.formatToParts(new Date())
      const tzShort = parts.find(p => p.type === "timeZoneName").value
      

    // Step 4: Detect the user’s timezone
    const userZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    // Step 5: Display as a single <li>
    return (
        <li>
            <li className=" mb-4">
                <div className="font-semibold">{userZone?.split("/")[1]?.split("_").join(" ") +" Time:"}</div>
                <div className="text-sm font-light text-slate-400">
                    {localTime} - {localTimePlus8} {tzShort}
                </div>
            </li>
        </li>
    )
}
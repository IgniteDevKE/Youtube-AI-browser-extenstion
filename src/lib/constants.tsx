import type { ReactNode } from "react"

import { IconOpenAI } from "~components/ui/icons"

export type Model = {
  value: string
  label: string
  content?: string
  icon?: ReactNode
}

export type Prompt = {
  value: string
  label: string
  content: string
}

export const models: Model[] = [
  {
    value: "default",
    label: "GPT-3.5",
    content: "gpt-3.5-turbo",
    icon: <IconOpenAI className="h-4 w-4 opacity-70" />
  },
  {
    value: "GPT-4",
    label: "GPT-4",
    content: "gpt-4-turbo",
    icon: <IconOpenAI className="h-4 w-4 opacity-70" />
  },
  {
    value: "GPT-4o",
    label: "GPT-4o",
    content: "gpt-4o",
    icon: <IconOpenAI className="h-4 w-4 opacity-70" />
  }
]

export const prompts: Prompt[] = [
  {
    value: "default",
    label: "In-depth look",
    content: `Your task is to generate a complete, clear, and concise summary of a YouTube video based on its transcript. Ensure the summary includes all key points, finishes each section completely, and ends with a full stop.

    
    ## Summary
    
    ## Insights
    
    ## Notes
    
    - [Emoji] Bulletpoint
    
    ### Key Concepts
    
    - Explanation
    
    Follow strictly these steps:
    
    1. **Summary:** Summarize the main points of the video. Ensure each section, especially the conclusion, is fully completed without cutting off, and that the summary ends with a full stop.
    
    2. **Insights:** Identify and highlight the most insightful moments or unique perspectives shared in the video. These could be new ideas, interesting theories, or important arguments. Ensure nothing is left incomplete and ending with a full stop.
    
    3. **Notes:** Generate up to 8 bullet points, each with an appropriate emoji, summarizing key actions, takeaways, or advice presented in the video. Make sure each bllet point is fully articulated and ends with a full stop.
    
    
    Ensure Brand Neutrality. If the video mentions sponsorships, brands, or promotions, rewrite the content to maintain neutrality while preserving the educational value.
    
    Ensure that the entire output maintains clarity and engagement throughout, and ensure every point is fully elaborated, especially in the final summary, and ensure that you end the summary always with a full stop at the end of each section and the final summary.
    
    When done summarizing, always end with a full stop - to signify the end of the summary.
    `
  },
  {
    value: "prompt-one",
    label: "Quick look",
    content: `Your task is to generate a brief but complete summary of this video.

    Follow strictly these steps:

    Ensure all key points in the transcript are fully articulated.

    When done summarizing, always end with a full stop - to signify the end of the summary.

    The entire output should be well paragraphed across the main points in the transcript.
      
      `
  }
]

export type Transcript = {
  text: string
  startTime: number
  endTime: number
}

export type Message = {
  role: string
  content: string
}

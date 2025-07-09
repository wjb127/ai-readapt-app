import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 타입 정의
export interface PreorderClick {
  id?: string
  service: string
  clicked_at?: string
}

export interface Preorder {
  id?: string
  service: string
  email: string
  marketing_opt_in: boolean
  created_at?: string
}

// 버튼 클릭 이벤트 저장
export async function savePreorderClick(service: string) {
  const { data, error } = await supabase
    .from('preorder_clicks')
    .insert([{ service }])
    .select()

  if (error) {
    console.error('Error saving preorder click:', error)
    return { success: false, error }
  }

  return { success: true, data }
}

// 사전예약 저장
export async function savePreorder(service: string, email: string, marketingOptIn: boolean) {
  const { data, error } = await supabase
    .from('preorders')
    .insert([{ 
      service, 
      email, 
      marketing_opt_in: marketingOptIn 
    }])
    .select()

  if (error) {
    console.error('Error saving preorder:', error)
    return { success: false, error }
  }

  return { success: true, data }
} 
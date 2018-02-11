export interface UserSkillView{
    user_skill_id: number;
    user_id: number;
    skill_id: number;
    skill_name: string;
    competency_level_id: number;
    competency_level:string;
    is_mandatory?:boolean ;
    is_completed?:boolean;
}
def get_component_query(search_query=None):
    base_query = """
    SELECT A.id, A.Coreel_Part_No, B.Family, C.Type_Name, A.Description, A.MPN, D.Manufacture_Name 
    FROM [Comp_DB].[dbo].[Comp_List] A
    INNER JOIN [Comp_DB].[dbo].[Comp_Family_Type] B ON A.Family_Id = B.Family_Id
    INNER JOIN [Comp_DB].[dbo].[Comp_Family_Sub_Type] C ON A.Sub_Famliy_Id = C.Type_Id
    INNER JOIN [Comp_DB].[dbo].[Comp_Manufactures] D ON A.Manufacturer_Id = D.Manufacture_Id
    """
    
    if search_query:
        search_condition = f"WHERE (A.Coreel_Part_No LIKE '%{search_query}%') OR (A.MPN LIKE '%{search_query}%')"
        return base_query + search_condition
    else:
        return base_query
select A.id, A.Coreel_Part_No, B.Family,C.Type_Name, A.Description, A.MPN, D.Manufacture_Name from [Comp_DB].[dbo].[Comp_List] A

inner join [Comp_DB].[dbo].[Comp_Family_Type] B on A.Family_Id=B.Family_Id

inner join [Comp_DB].[dbo].[Comp_Family_Sub_Type] C on A.Sub_Famliy_Id=C.Type_Id

inner join (SELECT A.Mfg_Id, MFG.Manufacture_Name FROM [Comp_DB].[dbo].[Comp_ManufactureDetails] as A

inner join [Comp_DB].[dbo].[Comp_Manufactures] as MFG ON MFG.Manufacture_Id= A.Manufacturer) D on A.Manufacturer_Id = D.Mfg_Id

where (Coreel_Part_No like '%xx%') or (MPN like '%C0603C122J5GACAUTO%')
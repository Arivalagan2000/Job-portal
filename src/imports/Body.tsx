import svgPaths from "./svg-imnp7znelj";
import imgCompanyLogoFramer from "figma:asset/3787bb483eb5d4068d9ce83047a63596058cd1c3.png";
import imgCompanyLogoVercel from "figma:asset/c3c731824443ba32daa066f606830d9a1f550bfd.png";
import imgCompanyLogoNotion from "figma:asset/a38700a205d75a5727dec014ee3356c7251aeb13.png";
import imgCompanyLogoLinear from "figma:asset/53ed3f70f65b16fc737f73c1a06516eda0c66c96.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[49.02px]">
        <p className="leading-[24px] whitespace-pre-wrap">Filters</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[12px] text-center w-[50.02px]">
        <p className="leading-[16px] whitespace-pre-wrap">Reset All</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading1 />
        <Button />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="SVG">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38px] items-end justify-center left-0 overflow-clip pl-[208px] pr-[9px] py-[8.5px] top-0 w-[238px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[13px] overflow-clip right-[41px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[134.75px]">
        <p className="leading-[20px] whitespace-pre-wrap">Remote (Worldwide)</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#f8fafc] h-[38px] relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ImageFill />
      <Container2 />
    </div>
  );
}

function LocationDropdown() {
  return (
    <div className="relative shrink-0 w-full" data-name="Location Dropdown">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.5px] items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-[66.28px]">
          <p className="leading-[16px] whitespace-pre-wrap">Location</p>
        </div>
        <Options />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pf079980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Svg1 />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#24aceb] content-stretch flex flex-col items-start p-px relative rounded-[4px] shrink-0 size-[18px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ImageFill1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[61.13px]">
        <p className="leading-[20px] whitespace-pre-wrap">Full-Time</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-[239px]" data-name="Label">
      <Input />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[64.86px]">
        <p className="leading-[20px] whitespace-pre-wrap">Part-Time</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[57.19px]">
        <p className="leading-[20px] whitespace-pre-wrap">Contract</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[66.03px]">
        <p className="leading-[20px] whitespace-pre-wrap">Internship</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Container7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Container">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
    </div>
  );
}

function EmploymentTypeMultiSelect() {
  return (
    <div className="relative shrink-0 w-full" data-name="Employment Type (Multi-select)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.5px] items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-[128.86px]">
          <p className="leading-[16px] whitespace-pre-wrap">Employment Type</p>
        </div>
        <Container3 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-[100.14px]">
        <p className="leading-[16px] whitespace-pre-wrap">Salary Range</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[12px] w-[83.56px]">
        <p className="leading-[16px] whitespace-pre-wrap">$80k - $150k+</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Container9 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f1f5f9] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#24aceb] bottom-0 left-1/4 right-0 rounded-[9999px] top-0" data-name="Background" />
      <div className="-translate-y-1/2 absolute bg-white border-2 border-[#24aceb] border-solid h-[16px] left-[21.64%] right-[71.64%] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-1/2" data-name="Background+Border+Shadow" />
      <div className="-translate-y-1/2 absolute bg-white border-2 border-[#24aceb] border-solid right-[-8px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-1/2" data-name="Background+Border+Shadow" />
    </div>
  );
}

function SalaryRangeSliderSimulated() {
  return (
    <div className="relative shrink-0 w-full" data-name="Salary Range Slider (Simulated)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container8 />
        <Background />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] w-[85.41px]">
        <p className="leading-[20px] whitespace-pre-wrap">Remote Only</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#24aceb] content-stretch flex h-[24px] items-center pl-[24px] pr-[4px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Button">
      <div className="bg-white rounded-[9999px] shrink-0 size-[16px]" data-name="Background" />
    </div>
  );
}

function RemoteOnlyToggle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Remote Only Toggle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Label5 />
        <Button1 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24.47px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[66.06px]">
        <p className="leading-[16px] whitespace-pre-wrap">Last 7 Days</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(36,172,235,0.05)] content-stretch flex flex-col items-center justify-center pl-[20.27px] pr-[20.26px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#24aceb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[12px] text-center w-[74.47px]">
        <p className="leading-[16px] whitespace-pre-wrap">Last 30 Days</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function DatePosted() {
  return (
    <div className="relative shrink-0 w-full" data-name="Date Posted">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.5px] items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-[89.23px]">
          <p className="leading-[16px] whitespace-pre-wrap">Date Posted</p>
        </div>
        <Container10 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative w-full">
        <Container1 />
        <LocationDropdown />
        <EmploymentTypeMultiSelect />
        <SalaryRangeSliderSimulated />
        <RemoteOnlyToggle />
        <DatePosted />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[80.2px] relative w-[80px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80.2">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p3c5f4980} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Pro Feature</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Job Match Alerts</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 pb-[16px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Get instant notifications for jobs</p>
        <p>matching your profile.</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[14px] text-center w-[93.02px]">
        <p className="leading-[20px] whitespace-pre-wrap">Upgrade Now</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Heading2 />
      <Container14 />
      <Button4 />
    </div>
  );
}

function AdPromoCard() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Ad/Promo Card" style={{ backgroundImage: "linear-gradient(143.13deg, rgb(36, 172, 235) 0%, rgb(37, 99, 235) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <div className="absolute bottom-[-24.93px] flex h-[95.08px] items-center justify-center right-[-24.93px] w-[94.926px]" style={{ "--transform-inner-width": "1180.828125", "--transform-inner-height": "154.15625" } as React.CSSProperties}>
            <div className="flex-none rotate-12">
              <Container11 />
            </div>
          </div>
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function AsideSidebarFilterSystem() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[288px]" data-name="Aside - Sidebar Filter System">
      <BackgroundBorderShadow />
      <AdPromoCard />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] w-[207.16px]">
        <p className="leading-[32px] whitespace-pre-wrap">1,284 Jobs Found</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[246.06px]">
        <p className="leading-[20px] whitespace-pre-wrap">Showing the latest tech opportunities</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="Container">
          <path d={svgPaths.p379c400} fill="var(--fill-0, #24ACEB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative">
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 7.5">
        <g id="Container">
          <path d={svgPaths.p34007380} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative">
        <Container20 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[5px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="SVG">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38px] items-end justify-center left-0 overflow-clip pl-[153px] pr-[9px] py-[8.5px] top-0 w-[183px]" data-name="image fill">
      <Svg2 />
    </div>
  );
}

function Container21() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[13px] overflow-clip pr-[49.45px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[79.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">Newest first</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-white h-[38px] min-w-[140px] relative rounded-[8px] shrink-0 w-[183px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ImageFill2 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Options1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[51.56px]">
        <p className="leading-[16px] whitespace-pre-wrap">Active:</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p2317cf00} fill="var(--fill-0, #24ACEB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(36,172,235,0.1)] content-stretch flex gap-[6px] items-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(36,172,235,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[12px] w-[53.16px]">
        <p className="leading-[16px] whitespace-pre-wrap">Full-Time</p>
      </div>
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p2317cf00} fill="var(--fill-0, #24ACEB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(36,172,235,0.1)] content-stretch flex gap-[6px] items-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(36,172,235,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[12px] w-[74.47px]">
        <p className="leading-[16px] whitespace-pre-wrap">Last 30 Days</p>
      </div>
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p2317cf00} fill="var(--fill-0, #24ACEB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(36,172,235,0.1)] content-stretch flex gap-[6px] items-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(36,172,235,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[12px] w-[73.22px]">
        <p className="leading-[16px] whitespace-pre-wrap">Remote Only</p>
      </div>
      <Container24 />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center w-[46.52px]">
        <p className="leading-[16px] whitespace-pre-wrap">Clear all</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
      <Button7 />
    </div>
  );
}

function ActiveFilterPills() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Active Filter Pills">
      <Margin />
      <OverlayBorder />
      <OverlayBorder1 />
      <OverlayBorder2 />
      <ButtonMargin />
    </div>
  );
}

function FilterSummaryControls() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Filter Summary & Controls">
      <Container15 />
      <ActiveFilterPills />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-gradient-to-r from-1/4 from-[#f0f0f0] h-[16px] rounded-[4px] shrink-0 to-3/4 to-[#f0f0f0] via-1/2 via-[#e0e0e0] w-[259.5px]" data-name="Gradient" />
      <div className="bg-gradient-to-r from-1/4 from-[#f0f0f0] h-[12px] rounded-[4px] shrink-0 to-3/4 to-[#f0f0f0] via-1/2 via-[#e0e0e0] w-[173px]" data-name="Gradient" />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <div className="bg-gradient-to-r from-1/4 from-[#f0f0f0] rounded-[8px] shrink-0 size-[48px] to-3/4 to-[#f0f0f0] via-1/2 via-[#e0e0e0]" data-name="Gradient" />
        <Container26 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-gradient-to-r from-1/4 from-[#f0f0f0] h-[24px] rounded-[9999px] shrink-0 to-3/4 to-[#f0f0f0] via-1/2 via-[#e0e0e0] w-[64px]" data-name="Gradient" />
      <div className="bg-gradient-to-r from-1/4 from-[#f0f0f0] h-[24px] rounded-[9999px] shrink-0 to-3/4 to-[#f0f0f0] via-1/2 via-[#e0e0e0] w-[64px]" data-name="Gradient" />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <div className="bg-gradient-to-r from-1/4 from-[#f0f0f0] h-[12px] rounded-[4px] shrink-0 to-3/4 to-[#f0f0f0] via-1/2 via-[#e0e0e0] w-full" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#f0f0f0] h-[12px] rounded-[4px] shrink-0 to-3/4 to-[#f0f0f0] via-1/2 via-[#e0e0e0] w-[341.66px]" data-name="Gradient" />
        <Container28 />
      </div>
    </div>
  );
}

function SkeletonLoaderState() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-0 pb-[40px] pt-[21px] px-[21px] right-[468px] rounded-[12px] top-0" data-name="Skeleton Loader State">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container25 />
      <Container27 />
    </div>
  );
}

function CompanyLogoFramer() {
  return (
    <div className="max-w-[48px] relative shrink-0 size-[40px]" data-name="Company Logo Framer">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCompanyLogoFramer} />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 size-[48px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <CompanyLogoFramer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[135.92px]">
        <p className="leading-[24px] whitespace-pre-wrap">Product Designer</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[105.47px]">
        <p className="leading-[20px] whitespace-pre-wrap">Framer · Design</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Heading4 />
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <BackgroundBorder1 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p279a9400} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container33 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container30 />
        <Button8 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[205px] top-0" data-name="Container">
      <Container36 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[55.17px]">
        <p className="leading-[16px] whitespace-pre-wrap">Berlin, DE</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 9.33333">
        <g id="Container">
          <path d={svgPaths.p35624880} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[205px] right-0 top-0" data-name="Container">
      <Container38 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[73.77px]">
        <p className="leading-[16px] whitespace-pre-wrap">€80k - €110k</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[205px] top-[32px]" data-name="Container">
      <Container40 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[49.02px]">
        <p className="leading-[16px] whitespace-pre-wrap">Contract</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p24c62380} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[205px] right-0 top-[32px]" data-name="Container">
      <Container42 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[109.59px]">
        <p className="leading-[16px] whitespace-pre-wrap">Ends: Nov 12, 2023</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container35 />
        <Container37 />
        <Container39 />
        <Container41 />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(36,172,235,0.1)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[10px] tracking-[0.5px] uppercase w-[45.61px]">
        <p className="leading-[15px] whitespace-pre-wrap">On-site</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] tracking-[0.5px] uppercase w-[35.47px]">
        <p className="leading-[15px] whitespace-pre-wrap">Figma</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Overlay />
      <Background1 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #24ACEB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[14px] text-center w-[40.47px]">
        <p className="leading-[20px] whitespace-pre-wrap">Apply</p>
      </div>
      <Container45 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[8px] relative w-full">
        <Container44 />
        <Button9 />
      </div>
    </div>
  );
}

function JobCard1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-0 p-[21px] right-[468px] rounded-[12px] top-[221px]" data-name="Job Card 2">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container29 />
      <Container34 />
      <Container43 />
    </div>
  );
}

function CompanyLogoVercel() {
  return (
    <div className="max-w-[48px] relative shrink-0 size-[40px]" data-name="Company Logo Vercel">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCompanyLogoVercel} />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 size-[48px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <CompanyLogoVercel />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[135.23px]">
        <p className="leading-[24px] whitespace-pre-wrap">DevOps Engineer</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[145.7px]">
        <p className="leading-[20px] whitespace-pre-wrap">Vercel · Infrastructure</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Heading5 />
      <Container49 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <BackgroundBorder2 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p279a9400} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container50 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container47 />
        <Button10 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[205px] top-0" data-name="Container">
      <Container53 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[43.06px]">
        <p className="leading-[16px] whitespace-pre-wrap">Remote</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 9.33333">
        <g id="Container">
          <path d={svgPaths.p35624880} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[205px] right-0 top-0" data-name="Container">
      <Container55 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[82.95px]">
        <p className="leading-[16px] whitespace-pre-wrap">$160k - $220k</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[205px] top-[32px]" data-name="Container">
      <Container57 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[52.39px]">
        <p className="leading-[16px] whitespace-pre-wrap">Full-Time</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p24c62380} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[205px] right-0 top-[32px]" data-name="Container">
      <Container59 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[109.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">Ends: Dec 01, 2023</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container52 />
        <Container54 />
        <Container56 />
        <Container58 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] tracking-[0.5px] uppercase w-[45.09px]">
        <p className="leading-[15px] whitespace-pre-wrap">Remote</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] tracking-[0.5px] uppercase w-[25.13px]">
        <p className="leading-[15px] whitespace-pre-wrap">AWS</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Background2 />
      <Background3 />
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #24ACEB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[14px] text-center w-[40.47px]">
        <p className="leading-[20px] whitespace-pre-wrap">Apply</p>
      </div>
      <Container62 />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[8px] relative w-full">
        <Container61 />
        <Button11 />
      </div>
    </div>
  );
}

function JobCard2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[468px] p-[21px] right-0 rounded-[12px] top-[221px]" data-name="Job Card 3">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container46 />
      <Container51 />
      <Container60 />
    </div>
  );
}

function CompanyLogoNotion() {
  return (
    <div className="max-w-[48px] relative shrink-0 size-[40px]" data-name="Company Logo Notion">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCompanyLogoNotion} />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 size-[48px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <CompanyLogoNotion />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[99.09px]">
        <p className="leading-[24px] whitespace-pre-wrap">Growth Lead</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[123.42px]">
        <p className="leading-[20px] whitespace-pre-wrap">Notion · Marketing</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Heading6 />
      <Container66 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <BackgroundBorder3 />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p279a9400} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container67 />
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container64 />
        <Button12 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[205px] top-0" data-name="Container">
      <Container70 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[78.75px]">
        <p className="leading-[16px] whitespace-pre-wrap">New York, NY</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 9.33333">
        <g id="Container">
          <path d={svgPaths.p35624880} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[205px] right-0 top-0" data-name="Container">
      <Container72 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[80.52px]">
        <p className="leading-[16px] whitespace-pre-wrap">$120k - $160k</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[205px] top-[32px]" data-name="Container">
      <Container74 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[52.39px]">
        <p className="leading-[16px] whitespace-pre-wrap">Full-Time</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p24c62380} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[205px] right-0 top-[32px]" data-name="Container">
      <Container76 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[109.28px]">
        <p className="leading-[16px] whitespace-pre-wrap">Ends: Oct 30, 2023</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container69 />
        <Container71 />
        <Container73 />
        <Container75 />
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(36,172,235,0.1)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[10px] tracking-[0.5px] uppercase w-[41px]">
        <p className="leading-[15px] whitespace-pre-wrap">Hybrid</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] tracking-[0.5px] uppercase w-[21.83px]">
        <p className="leading-[15px] whitespace-pre-wrap">SEO</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Overlay1 />
      <Background4 />
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #24ACEB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[14px] text-center w-[40.47px]">
        <p className="leading-[20px] whitespace-pre-wrap">Apply</p>
      </div>
      <Container79 />
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[8px] relative w-full">
        <Container78 />
        <Button13 />
      </div>
    </div>
  );
}

function JobCard3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-0 p-[21px] right-[468px] rounded-[12px] top-[442px]" data-name="Job Card 4">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container63 />
      <Container68 />
      <Container77 />
    </div>
  );
}

function CompanyLogoLinear() {
  return (
    <div className="max-w-[48px] relative shrink-0 size-[40px]" data-name="Company Logo Linear">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCompanyLogoLinear} />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 size-[48px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <CompanyLogoLinear />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[198.14px]">
        <p className="leading-[24px] whitespace-pre-wrap">Senior Frontend Engineer</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[133.39px]">
        <p className="leading-[20px] whitespace-pre-wrap">Linear · Engineering</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Heading7 />
      <Container83 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <BackgroundBorder4 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p279a9400} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container84 />
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container81 />
        <Button14 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[205px] top-0" data-name="Container">
      <Container87 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[103.78px]">
        <p className="leading-[16px] whitespace-pre-wrap">San Francisco, CA</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 9.33333">
        <g id="Container">
          <path d={svgPaths.p35624880} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[205px] right-0 top-0" data-name="Container">
      <Container89 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[80.94px]">
        <p className="leading-[16px] whitespace-pre-wrap">$140k - $190k</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[205px] top-[32px]" data-name="Container">
      <Container91 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[52.39px]">
        <p className="leading-[16px] whitespace-pre-wrap">Full-Time</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p24c62380} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[205px] right-0 top-[32px]" data-name="Container">
      <Container93 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[109.08px]">
        <p className="leading-[16px] whitespace-pre-wrap">Ends: Oct 24, 2023</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container86 />
        <Container88 />
        <Container90 />
        <Container92 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] tracking-[0.5px] uppercase w-[45.09px]">
        <p className="leading-[15px] whitespace-pre-wrap">Remote</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] tracking-[0.5px] uppercase w-[36.27px]">
        <p className="leading-[15px] whitespace-pre-wrap">React</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Background5 />
      <Background6 />
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #24ACEB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#24aceb] text-[14px] text-center w-[40.47px]">
        <p className="leading-[20px] whitespace-pre-wrap">Apply</p>
      </div>
      <Container96 />
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[8px] relative w-full">
        <Container95 />
        <Button15 />
      </div>
    </div>
  );
}

function JobCard() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[468px] p-[21px] right-0 rounded-[12px] top-0" data-name="Job Card 1">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container80 />
      <Container85 />
      <Container94 />
    </div>
  );
}

function JobCardsGrid() {
  return (
    <div className="h-[647px] relative shrink-0 w-full" data-name="Job Cards Grid">
      <SkeletonLoaderState />
      <JobCard1 />
      <JobCard2 />
      <JobCard3 />
      <JobCard />
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[72.73px]">
        <p className="leading-[20px] whitespace-pre-wrap">Pagination</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center w-[88.84px]">
        <p className="leading-[20px] whitespace-pre-wrap">Infinite Scroll</p>
      </div>
    </div>
  );
}

function ScrollToggle() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[12px] shrink-0" data-name="Scroll Toggle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-[6px] relative">
        <Button16 />
        <Button17 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container97 />
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#24aceb] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[6.91px]">
        <p className="leading-[24px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] text-center w-[9.97px]">
        <p className="leading-[24px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] text-center w-[10.19px]">
        <p className="leading-[24px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start px-[4px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[16px] w-[13.83px]">
        <p className="leading-[24px] whitespace-pre-wrap">...</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] text-center w-[16.73px]">
        <p className="leading-[24px] whitespace-pre-wrap">12</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container99 />
    </div>
  );
}

function NavPages() {
  return (
    <div className="relative shrink-0" data-name="Nav - Pages">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Button18 />
        <Button19 />
        <Button20 />
        <Button21 />
        <Container98 />
        <Button22 />
        <Button23 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[78.98px]">
          <p className="leading-[20px] whitespace-pre-wrap">Page 1 of 12</p>
        </div>
      </div>
    </div>
  );
}

function BottomPaginationControls() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom Pagination Controls">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.02px] pt-[33px] relative w-full">
          <ScrollToggle />
          <NavPages />
          <Container100 />
        </div>
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Main Content Area">
      <FilterSummaryControls />
      <JobCardsGrid />
      <BottomPaginationControls />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-0 max-w-[1440px] p-[24px] right-0 top-[65px]" data-name="Container">
      <AsideSidebarFilterSystem />
      <MainContentArea />
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center w-[418.05px]">
          <p className="leading-[20px] whitespace-pre-wrap">© 2023 CareerHub Job Discovery Platform. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function FooterSpace() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-[32px] pt-[33px] right-0 top-[1031px]" data-name="Footer Space">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Container101 />
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Container">
          <path d={svgPaths.p1230f680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#24aceb] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container103 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] tracking-[-0.5px] w-[101.86px]">
        <p className="leading-[28px] whitespace-pre-wrap">CareerHub</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
      <Background7 />
      <Heading />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Search job titles, companies, or keywords...</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[12px] pl-[40px] pr-[48px] pt-[11px] relative w-full">
          <Container105 />
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute bottom-[20%] content-stretch flex flex-col items-start left-[12px] top-[20%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0 size-[10.682px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6816 10.6816">
        <g id="Container">
          <path d={svgPaths.pc294840} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function KeyboardDebounceIndicator() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[20px] items-center px-[7px] py-px relative rounded-[4px] shrink-0" data-name="Keyboard - Debounce indicator">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container108 />
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[6.01px]">
        <p className="leading-[15px] whitespace-pre-wrap">K</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute bottom-1/4 content-stretch flex gap-[8px] items-center right-[11.99px] top-1/4" data-name="Container">
      <div className="opacity-0 relative rounded-[9999px] shrink-0 size-[16px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <KeyboardDebounceIndicator />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container106 />
      <Container107 />
    </div>
  );
}

function DebouncedSearchBar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[672px] min-h-px min-w-px relative" data-name="Debounced Search Bar">
      <Container104 />
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p7281a80} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container109 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start px-[4px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-[#e2e8f0] h-[24px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
        <g id="Container">
          <path d={svgPaths.p292bd880} fill="var(--fill-0, #334155)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container110 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] text-center w-[29.61px]">
        <p className="leading-[20px] whitespace-pre-wrap">CSV</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p13024580} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[#24aceb] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container111 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[27.38px]">
        <p className="leading-[20px] whitespace-pre-wrap">PDF</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
      <Button24 />
      <Margin1 />
      <Button25 />
      <Button26 />
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[64px] max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[24px] pr-[24.02px] relative size-full">
          <Logo />
          <DebouncedSearchBar />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function GlobalHeader() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-px right-0 top-0" data-name="Global Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container102 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f6f7f8] relative size-full" data-name="Body">
      <Container />
      <FooterSpace />
      <GlobalHeader />
    </div>
  );
}